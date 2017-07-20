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

    Route::get('/me', 'UserController@getCurrent');

    Route::post('/', 'UserController@store');

    Route::get('/{user_id}', 'UserController@show')->where('user_id', '[0-9]+');

    Route::patch('/{user_id}', 'UserController@update')->where('user_id', '[0-9]+');

    Route::delete('/{user_id}', 'UserController@destroy')->where('user_id', '[0-9]+');

    // ->middleware('auth');

    Route::get('/search', 'UserController@search');
    
    Route::get('/search/{param}/{text}', 'UserController@searchByParam');

    Route::get('/wallet_transaction_list/{user}', 'WalletTransactionController@getUserTransaction');
});