<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Auth;

class LoginController extends Controller
{
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
     * @return mixed
     */
    protected function doLogin(Request $request)
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

        // if (Auth::attempt([ 'email' => $email, 'password' => $password ])) {
        //     return response()->json([
        //         'user' => Auth::user()->load([
        //             'user_additional_info',
        //             'user_document',
        //             'user_language',
        //             'user_job',
        //             'user_wallet',
        //             'user_work_time',
        //             'contact'
        //         ]),
        //         'status' => 200
        //     ]);
        // }
        // else {
        //     return response()->json([ 'message' => 'Combination Email and Password not match', 
        //                               'status' => 403 ]);
        // }
    }
}
