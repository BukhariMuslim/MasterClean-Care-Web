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

// ->middleware('auth')
Route::get('/login', function () {
    return view('index');
})->name('login')->middleware('guest');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('{reactRoutes}', function () {
    return view('index');
})->where('reactRoutes', '^((?!api).)*$');
