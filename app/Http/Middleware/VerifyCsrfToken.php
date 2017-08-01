<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;
<<<<<<< HEAD
use Auth;
=======
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
    ];

<<<<<<< HEAD
    /**
    * Determine if the session and input CSRF tokens match.
    *
    * @param \Illuminate\Http\Request $request
    * @return bool
    */
    protected function tokensMatch($request)
    {
        // If request is an ajax request, then check to see if token matches token provider in
        // the header. This way, we can use CSRF protection in ajax requests also.
        $token = $request->ajax() ? $request->header('X-CSRF-Token') : $request->input('_token');

        var_dump(Auth::guest());
        var_dump(Auth::check());
        var_dump(Auth::user());
        var_dump($request->session()->token());
        var_dump($token);
        die();
        return $request->session()->token() == $token;
    }
=======
    // /**
    // * Determine if the session and input CSRF tokens match.
    // *
    // * @param \Illuminate\Http\Request $request
    // * @return bool
    // */
    // protected function tokensMatch($request)
    // {
    //     // If request is an ajax request, then check to see if token matches token provider in
    //     // the header. This way, we can use CSRF protection in ajax requests also.
    //     $token = $request->ajax() ? $request->header('X-CSRF-TOKEN') : $request->input('_token');
    //     return $request->session()->token() == $token;
    // }
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
}
