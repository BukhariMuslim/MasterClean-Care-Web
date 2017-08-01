<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/

// Route::post('/authenticate', 'Auth\LoginController@authenticate');

Route::post('/check_login', 'Auth\LoginController@doLogin');

// Route::post('/logout', 'Auth\LoginController@doLogout');

Route::post('/image', 'ImageController@store');

Route::group(['prefix' => 'user'], function () {
    Route::get('/', 'UserController@index');

    Route::post('/', 'UserController@store');
    
    Route::get('/art', 'UserController@getArt');

    Route::get('/me', 'UserController@getCurrent')->middleware(['auth']);

    Route::get('/{user_id}', 'UserController@show')->where('user_id', '[0-9]+');

    Route::patch('/{user_id}', 'UserController@update')->where('user_id', '[0-9]+')->middleware(['auth']);

    Route::delete('/{user_id}', 'UserController@destroy')->where('user_id', '[0-9]+')->middleware(['auth']);

    // ->middleware('auth');

    Route::get('/search', 'UserController@search');
    
    Route::get('/search/{param}/{text}', 'UserController@searchByParam');

    Route::get('/wallet_transaction_list/{user}', 'WalletTransactionController@getUserTransaction');
});