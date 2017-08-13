<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/

// Route::post('/authenticate', 'Auth\LoginController@authenticate');

Route::post('/check_login', 'Auth\LoginController@doLogin');

Route::post('/check_login/{role_id}', 'Auth\LoginController@doLogin');

// Route::post('/logout', 'Auth\LoginController@doLogout');

Route::post('/image', 'ImageController@store');

Route::group(['prefix' => 'user'], function () {
    Route::get('/', 'UserController@index');

    Route::post('/', 'UserController@store');
    
    Route::get('/art', 'UserController@getArt');
    
    Route::get('/art/{art}', 'UserController@getArtById')->where('art', '[0-9]+');

    Route::get('/member/{member}', 'UserController@getMemberById')->where('member', '[0-9]+');

    Route::get('/art/search', 'UserController@searchArt');

    Route::get('/me', 'UserController@getCurrent')->middleware(['auth:api']);
    
    Route::get('/{user_id}', 'UserController@show')->where('user_id', '[0-9]+');

    // ->middleware(['auth:api']) Delete for Mobile
    Route::patch('/{user_id}', 'UserController@update')->where('user_id', '[0-9]+');

    Route::delete('/{user_id}', 'UserController@destroy')->where('user_id', '[0-9]+');

    // ->middleware('auth');

    Route::get('/search', 'UserController@search');
    
    Route::get('/search/{param}/{text}', 'UserController@searchByParam');

    Route::get('/wallet_transaction_list/{user}', 'WalletTransactionController@getUserTransaction');
});
