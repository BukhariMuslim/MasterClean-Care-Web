<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/

Route::post('/test_login', 'Auth\LoginController@authenticated');

Route::post('/check_login', 'Auth\LoginController@doLogin');

Route::post('/logout', 'UserController@logout')->middleware('web');

Route::group(['prefix' => 'user'], function () {
    Route::get('/', 'UserController@index');

    Route::post('/', 'UserController@store');
    
    Route::get('/art', 'UserController@getArt');

    Route::get('/me', 'UserController@getCurrent');

    Route::get('/{user_id}', 'UserController@show')->where('user_id', '[0-9]+');

    Route::patch('/{user_id}', 'UserController@update')->where('user_id', '[0-9]+');

    Route::delete('/{user_id}', 'UserController@destroy')->where('user_id', '[0-9]+');

    // ->middleware('auth');

    Route::get('/search', 'UserController@search');
    
    Route::get('/search/{param}/{text}', 'UserController@searchByParam');

    Route::get('/wallet_transaction_list/{user}', 'WalletTransactionController@getUserTransaction');
});