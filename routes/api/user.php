<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/

Route::post('/check_login', 'UserController@login')->middleware('api');

Route::post('/logout', 'UserController@logout')->middleware('api');

Route::group(['prefix' => 'user', 'middleware' => ['api']], function () {
    Route::get('/', 'UserController@index');

    Route::post('/', 'UserController@store');

    Route::get('/{id}', 'UserController@show')->where('id', '[0-9]+')->middleware('auth');

    Route::patch('/{id}', 'UserController@update')->where('id', '[0-9]+')->middleware('auth');

    Route::delete('/{id}', 'UserController@destroy')->where('id', '[0-9]+')->middleware('auth');

    Route::get('/search/{text}', 'UserController@search');
    
    Route::get('/search/{param}/{text}', 'UserController@searchByParam');
});