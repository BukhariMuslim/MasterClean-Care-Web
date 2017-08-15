<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserWallet;
use App\Models\UserLanguage;
use App\Models\UserJob;
use App\Models\UserWorkTime;
use App\Models\UserDocument;
use App\Models\UserAdditionalInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Http\UploadedFile;
use App\Helpers\Traits\ImageTrait;
use Carbon\Carbon;
use Image;
use Hash;
use Exception;
use DB;
use App\Helpers\Operators;
use Auth;
use Route;

class UserController extends Controller
{
    // comment added
    use ImageTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::with([
            'user_additional_info',
            'user_document',
            'user_language',
            'user_job',
            'user_wallet',
            'user_work_time',
            'contact',
        ])->get();

        return $users;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user->load([
            'user_additional_info',
            'user_document',
            'user_language',
            'user_job',
            'user_wallet',
            'user_work_time',
            'contact'
        ]);
        
        return $user;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Get the current user logged in.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getCurrent(Request $request)
    {
        if (Auth::guard('api')->check()) {
            $user = Auth::guard('api')->user();
            $user->load([
                'user_additional_info.additionalInfo',
                'user_document',
                'user_language.language',
                'user_job.job',
                'user_wallet',
                'user_work_time.workTime',
                'contact.city',
            ]);

            // if ($user->avatar) {
            //     $user->avatar = $this->generateUserPictureLinks($user->avatar);
            // }
            
            return $user;
        }
        else {
            return response()->json([ 'message' => 'Unauthorized', 
                                      'status' => 403 ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        // Insert User
        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }

            // Check email
            $email = $data['email'];
            $exists = User::where('email', $email)->get()->first();
            if (!is_null($exists)) {
                return response()->json([
                    'message' => 'A user with the email $email already exists!',
                    'status' => 400
                ]);
            }

            // Format Date
            $date = strtotime($data['born_date']);
            $data['born_date'] = date('Y-m-d', $date);

            // Hash Password
            $data['password'] = Hash::make($data['password']);

            //Set Default Img
            if ($data['avatar'] == '') {
                $data['avatar'] = 'default.png';
            }
            
            DB::beginTransaction();
            
            $user = User::create($data);
            
            // Save Contact
            $user->contact()->create($data['contact']);

            if ($user->role_id == 2) {
                // Initial Wallet
                $user_wallet = new UserWallet;
                $user_wallet->amt = 0; 
                $user->user_wallet()->save($user_wallet);
            }
            else if ($user->role_id == 3)
            {
                // Save Wallet
                $user->user_wallet()->create($data['user_wallet']);

                // Save Language
                $user->user_language()->createMany($data['user_language']);

                // Save Job
                $user->user_job()->createMany($data['user_job']);

                // Save Document
                if (array_key_exists('user_document', $data)) {
                    $user->user_document()->createMany($data['user_document']);
                }

                // Save AdditionalInfo
                $user->user_additional_info()->createMany($data['user_additional_info']);

                // Save WorkTime
                $user->user_work_time()->createMany($data['user_work_time']);
            }

            DB::commit();

            return response()->json([ 'user' => $user->load([
                'user_additional_info',
                'user_document',
                'user_language',
                'user_job',
                'user_wallet',
                'user_work_time',
                'contact'
            ]), 'status' => 201]);
        }
        catch(Exception $e) {
            DB::rollBack();
            
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function image(Request $request)
    {
        $data = $request->all();
        // Insert Image
        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
                dd(Image::make($data));
                $path = $request->avatar->store('images', 's3');
                return response()->json([ 'path' => $path, 
                                        'status' => 201]);
            }
            return response()->json([ 'message' => 'Image File not found', 
                                      'status' => 400 ]);
        }
        catch(Exception $e) {
            
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Login user for authentication.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        try {   
            Auth::logout();
            return response()->json([
                    'message' => 'Logout succeeded', 
                    'status' => 200]);
        }
        catch(Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $data = $request->all();

        try {
            DB::beginTransaction();

            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            
            if (array_key_exists('name', $data)) {
                $user->name = $data['name'];
            }
            if (array_key_exists('role_id', $data)) {
                $user->role_id = $data['role_id'];
            }
            if (array_key_exists('email', $data)) {
                $email = $data['email'];
                
                $exists = User::where('email', $email)->where('id', '!=', $user->id)->get()->first();
                if (!is_null($exists)) {
                    return response()->json([
                        'message' => 'A user with the email $email already exists!',
                        'status' => 400
                    ]);
                }
                $user->email = $email;
            }
            if (array_key_exists('avatar', $data)) {
                $user->avatar = $data['avatar'];
            }
            if (array_key_exists('password', $data)) {
                $data['password'] = Hash::make($data['password']);
            }
            if (array_key_exists('gender', $data)) {
                $user->gender = $data['gender'];
            }
            if (array_key_exists('born_place', $data)) {
                $user->born_place = $data['born_place'];
            }
            if (array_key_exists('born_date', $data)) {
                $user->born_date = $data['born_date'];
            }
            if (array_key_exists('religion', $data)) {
                $user->religion = $data['religion'];
            }
            if (array_key_exists('race', $data)) {
                $user->race = $data['race'];
            }
            if (array_key_exists('description', $data)) {
                $user->description = $data['description'];
            }
            if (array_key_exists('status', $data)) {
                $user->status = $data['status'];
            }
            if (array_key_exists('activation', $data)) {
                $user->status_activation = $data['activation'];
            }

            $user->save();
            
            if (array_key_exists('contact', $data)) {
                // Save Contact
                $user->contact()->delete();
                $user->contact()->create($data['contact']);
            }
            
            // Update Wallet
            if (array_key_exists('user_wallet', $data)) {
                $user->user_wallet()->delete();
                $user->user_wallet()->create($data['user_wallet']);
            }

            // Update Language
            if (array_key_exists('user_language', $data)) {
                $user->user_language()->delete();
                $user->user_language()->createMany($data['user_language']);
            }

            // Update Job
            if (array_key_exists('user_job', $data)) {
                $user->user_job()->delete();
                $user->user_job()->createMany($data['user_job']);
            }

            // Update Document
            if (array_key_exists('user_document', $data)) {
                $user->user_document()->delete();
                $user->user_document()->createMany($data['user_document']);
            }

            // Update AdditionalInfo
            if (array_key_exists('user_additional_info', $data)) {
                $user->user_additional_info()->delete();
                $user->user_additional_info()->createMany($data['user_additional_info']);
            }

            // Update WorkTime
            if (array_key_exists('user_work_time', $data)) {
                $user->user_work_time()->delete();
                $user->user_work_time()->createMany($data['user_work_time']);
            }

            DB::commit();

            return response()->json(['user' => $user->load([
                'user_additional_info.additionalInfo',
                'user_document',
                'user_language.language',
                'user_job.job',
                'user_wallet',
                'user_work_time.workTime',
                'contact.city',
            ]), 'status' => 200]);
        }
        catch (Exception $e) {
            DB::rollBack();

            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($user)
    {
        $user->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, User $user, $param, $text)
    {
        return $user
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request, User $user)
    {
        // $params = explode(';', $text);
        // $query = array();
        // foreach($params as $param) {
        //     list($key, $value) = explode('=', $param);
        //     array_push($query, 
        //         array($key,
        //             Operators::LIKE,
        //             '%'.$value.'%'
        //         )
        //     );
        // }

        try {
            $inputs = $request->all();
            
            foreach($inputs as $key => $input) {
                if ($key == 'user_job') {
                    $user = $user->has('user_job', $input);
                }
                else if ($key == 'user_language') {
                    $user = $user->has('user_language', $input);
                }
                else if ($key == 'user_work_time') {
                    $user = $user->has('user_work_time', $input);
                }
                else if ($key == 'gender'
                    || $key == 'religion'
                    || $key == 'born_date'
                ) {
                    $user = $user->where($key, $input);
                }
                else {
                    $user = $user->where($key, Operators::LIKE, '%'.$input.'%');
                }
            }
            
            return $user->get()->load([
                'user_additional_info',
                'user_document',
                'user_language',
                'user_job',
                'user_wallet',
                'user_work_time',
                'contact'
            ]);
        }
        catch (Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display a listing of the ART resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function searchArt(Request $request, User $user)
    {
        try {
            $inputs = $request->all();
            
            $user = User::with([
                'user_additional_info',
                'user_document',
                'user_language',
                'user_job',
                'user_wallet',
                'user_work_time',
                'contact',
            ])
            ->where('role_id', 3);

            $dateNow = Carbon::now();

            foreach($inputs as $key => $input) {
                if ($key == 'user_job' || $key == 'job') {
                    $user = $user->has('user_job', $input);
                }
                else if ($key == 'user_language') {
                    $user = $user->has('user_language', $input);
                }
                else if ($key == 'language') {
                    $temp = explode(',', $input);
                    $user = $user->whereHas('user_language', function($query) use ($temp) {
                        $query->whereIn('language_id', $temp);
                    });
                }
                else if ($key == 'user_work_time' || $key == 'work_time') {
                    $user = $user->has('user_work_time', $input);
                }
                else if ($key == 'minAge') {
                    $user = $user->where('born_date', Operators::LESS_THAN_EQUAL, $dateNow->copy()->addYear($input * -1));
                }
                else if ($key == 'maxAge') {
                    $user = $user->where('born_date', Operators::GREATER_THAN_EQUAL, $dateNow->copy()->addYear($input * -1)->addYear(-1));
                }
                else if ($key == 'maxCost') {
                    $user = $user->whereHas('user_work_time', function($query) use ($input) {
                        $query->where('cost', Operators::LESS_THAN_EQUAL, $input);
                    });
                }
                else if ($key == 'city') {
                    $user = $user->whereHas('contact', function($query) use ($input) {
                        $query->where('name', $input);
                    });
                }
                else if ($key == 'gender'
                    || $key == 'religion'
                    || $key == 'born_date'
                ) {
                    $user = $user->where($key, $input);
                }
                else if ($key == 'name'){
                    $user = $user->where($key, Operators::LIKE, '%'.$input.'%');
                }
            }
            
            return $user->orderBy('created_at', 'DESC')->paginate(10);
        }
        catch (Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display a listing of the ART resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getArt()
    {
        $users = User::with([
                'user_additional_info',
                'user_document',
                'user_language',
                'user_job',
                'user_wallet',
                'user_work_time',
                'contact',
            ])
            ->where('role_id', 3)
            ->paginate(10);

        return $users;
    }

    /**
     * Display a listing of the ART resource.
     *
     * @param  Parameter  $art
     * @return \Illuminate\Http\Response
     */
    public function getArtById($art)
    {
        $users = User::with([
                'user_additional_info.additionalInfo',
                'user_document',
                'user_language.language',
                'user_job.job',
                'user_wallet',
                'user_work_time.workTime',
                'contact.city',
            ])
            ->where('id', $art)
            ->where('role_id', 3)
            ->first();

        return $users;
    }

    /**
     * Display a listing of the Member resource.
     *
     * @param  Parameter  $member
     * @return \Illuminate\Http\Response
     */
    public function getMemberById($member)
    {
        $users = User::with([
                'user_wallet',
                'contact.city',
            ])
            ->where('id', $member)
            ->where('role_id', 2)
            ->first();

        return $users;
    }
}
