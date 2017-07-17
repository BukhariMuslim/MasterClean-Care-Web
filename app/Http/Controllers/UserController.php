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
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Collection;
use Exception;
use DB;
use App\Helper\Operator;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        foreach($users as $user) {
            $user->userAdditionalInfo = $user->userAdditionalInfo;
            $user->userDocument = $user->userDocument;
            $user->userLanguage = $user->userLanguage;
            $user->userJob = $user->userJob;
            $user->userWallet = $user->userWallet;
            $user->userWorkTime = $user->userWorkTime;
        }

        return $users;
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
                    'message' => "A user with the email $email already exists!",
                    'status' => 400
                ]);
            }

            // Format Date
            $date = strtotime($data['born_date']);
            $data['born_date'] = date('Y-m-d', $date);

            // Hash Password
            $data['password'] = Hash::make($data['password']);

            DB::beginTransaction();
            
            $user = User::create($data);
            

            if ($user->user_type == 1) {
                // Initial Wallet
                $userWallet = new UserWallet;
                $userWallet->amt = 0; 
                $user->userWallet()->save($userWallet);
            }
            else if ($user->user_type == 2)
            {
                // Save Wallet
                $user->userWallet()->createMany($data['userWallet']);

                // Save Language
                $user->userLanguage()->createMany($data['userLanguage']);

                // Save Job
                $user->userJob()->createMany($data['userJob']);

                // Save Document
                $user->userDocument()->createMany($data['userDocument']);

                // Save AdditionalInfo
                $user->userAdditionalInfo()->createMany($data['userAdditionalInfo']);

                // Save WorkTime
                $user->userWorkTime()->createMany($data['userWorkTime']);
            }

            DB::commit();

            return response()->json([ 'user' => $user, 'status' => 201]);
        }
        catch(Exception $e) {
            DB::rollBack();
            
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
    public function login(Request $request)
    {
        $data = $request->all();
        
        $email = $data['email'];
        $password = $data['password'];
        if (Auth::attempt([ 'email' => $email, 'password' => $password])) {
            return response()->json([
                'user' => Auth::User(), 
                'status' => 200]);
        }
        else {
            return response()->json([
                'message' => 'Your email and password combination not correct.', 
                'status' => 400]);
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
     * Display the specified resource.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user->userAdditionalInfo = $user->userAdditionalInfo;
        $user->userDocument = $user->userDocument;
        $user->userLanguage = $user->userLanguage;
        $user->userJob = $user->userJob;
        $user->userWallet = $user->userWallet;
        $user->userWorkTime = $user->userWorkTime;
        
        return $user;
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

            if (array_key_exists('name', $data)) {
                $user->name = $data['name'];
            }
            if (array_key_exists('email', $data)) {
                $email = $data['email'];
                
                $exists = User::where('email', $email)->where('id', '!=', $user->id)->get()->first();
                if (!is_null($exists)) {
                    return response()->json([
                        'message' => "A user with the email $email already exists!",
                        'status' => 400
                    ]);
                }
                $user->email = $email;
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
            if (array_key_exists('phone', $data)) {
                $user->phone = $data['phone'];
            }
            if (array_key_exists('province', $data)) {
                $user->city = $data['province'];
            }
            if (array_key_exists('city', $data)) {
                $user->city = $data['city'];
            }
            if (array_key_exists('address', $data)) {
                $user->address = $data['address'];
            }
            if (array_key_exists('location', $data)) {
                $user->location = $data['location'];
            }
            if (array_key_exists('religion', $data)) {
                $user->religion = $data['religion'];
            }
            if (array_key_exists('race', $data)) {
                $user->race = $data['race'];
            }
            if (array_key_exists('user_type', $data)) {
                $user->user_type = $data['user_type'];
            }
            if (array_key_exists('profile_img_name', $data)) {
                $user->profile_img_name = $data['profile_img_name'];
            }
            if (array_key_exists('profile_img_path', $data)) {
                $user->profile_img_path = $data['profile_img_path'];
            }
            if (array_key_exists('status', $data)) {
                $user->status = $data['status'];
            }

            // Update Wallet
            if (array_key_exists('userWallet', $data)) {
                $user->userWallet()->delete();
                $user->userWallet()->createMany($data['userWallet']);
            }

            // Update Language
            if (array_key_exists('userLanguage', $data)) {
                $user->userLanguage()->delete();
                $user->userLanguage()->createMany($data['userLanguage']);
            }

            // Update Job
            if (array_key_exists('userJob', $data)) {
                $user->userJob()->delete();
                $user->userJob()->createMany($data['userJob']);
            }

            // Update Document
            if (array_key_exists('userDocument', $data)) {
                $user->userDocument()->delete();
                $user->userDocument()->createMany($data['userDocument']);
            }

            // Update AdditionalInfo
            if (array_key_exists('userAdditionalInfo', $data)) {
                $user->userAdditionalInfo()->delete();
                $user->userAdditionalInfo()->createMany($data['userAdditionalInfo']);
            }

            // Update WorkTime
            if (array_key_exists('userWorkTime', $data)) {
                $user->userWorkTime()->delete();
                $user->userWorkTime()->createMany($data['userWorkTime']);
            }

            DB::commit();
        }
        catch (Exception $e) {
            DB::rollBack();

            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }

        $user->save();

        return response()->json(['user' => $user, 'status' => 200]);
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

        return response()->json([ 'message' => 'Deleted', 
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
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
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
    public function search(Request $request, User $user, $text)
    {
        return $user
            ->where('name',
                Operator::LIKE,
                '%'.$text.'%')
            ->orWhere('city',
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
