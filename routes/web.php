<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/testing', function(\Illuminate\Http\Request $request){
    
    $credential = [
        "email" =>  "mrabc@mail.com",
        "password" => "mrabc"
    ];
    $a = Auth::attempt($credential);

    dd($request->user());
    // dd(Auth::user());
})->middleware('web');

// ->middleware('auth')
Route::get('/login', function () {
    return view('index');
})->name('login')->middleware(['guest', 'api']);

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('{reactRoutes}', function () {
    return view('index');
})->where('reactRoutes', '^((?!api).)*$');