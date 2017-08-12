<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Helpers\Traits\ImageTrait;
use App\Models\User;
use Auth;
use Hash;
use Exception;

class LoginController extends Controller
{
    use ImageTrait;

    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticate(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $request->request->add([
            'username' => $email,
            'password' => $password,
            'grant_type' => 'password',
            'client_id' => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            'scope' => '*'
        ]);

        $tokenRequest = Request::create(
            env('APP_URL').'/oauth/token',
            'post'
        );
        return Route::dispatch($tokenRequest)->getContent();
    }

    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @param  mixed  $role_id
     * @return mixed
     */
    protected function doLogin(Request $request, $role_id = 0)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', $email)->first();

        if ($user) {
            if(Hash::check($password, $user->password)) {
                if ($user->status == 0) {
                    return response()->json([ 'message' => '',
                                                'status' => 403 ]);    
                }
                if ($user->role_id != $role_id && $role_id != 0) {
                    return response()->json([ 'message' => 'Akun Anda tidak memiliki hak untuk login',
                                                'status' => 403 ]);    
                }

                $request->request->add([
                    'username' => $email,
                    'password' => $password,
                    'grant_type' => 'password',
                    'client_id' => env('PASSWORD_CLIENT_ID'),
                    'client_secret' => env('PASSWORD_CLIENT_SECRET'),
                    'scope' => '*'
                ]);

                $tokenRequest = Request::create(
                    env('APP_URL').'/oauth/token',
                    'post'
                );

                try {
                    $token = Route::dispatch($tokenRequest)->getContent();

                    $user->load([
                        'user_additional_info',
                        'user_document',
                        'user_language',
                        'user_job',
                        'user_wallet',
                        'user_work_time',
                        'contact'
                    ]);
                    
                    // if ($user->avatar) {
                    //     $user->avatar = $this->generateUserPictureLinks($user->avatar);
                    // }

                    return response()->json([
                        'user' => $user,
                        'token' => json_decode($token, true),
                        'status' => 200
                    ]);
                }
                catch(Exception $e) {
                    return response()->json([ 'message' => $e->getMessage(), 
                                                'status' => 400 ]);
                }
            }
            else {
                return response()->json([ 'message' => 'Kombinasi Email dan Password tidak cocok', 
                                        'status' => 403 ]);
            }
        }
        else {
            return response()->json([ 'message' => 'Kombinasi Email dan Password tidak cocok', 
                                      'status' => 403 ]);
        }
    }
}
