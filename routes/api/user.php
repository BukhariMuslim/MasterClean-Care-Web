<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| User
|--------------------------------------------------------------------------
*/

<<<<<<< HEAD
Route::post('/authenticate', 'Auth\LoginController@authenticate')->middleware(['api','web']);

Route::post('/check_login', 'Auth\LoginController@doLogin');

Route::post('/logout', 'Auth\LoginController@doLogout')->middleware(['api','web']);

Route::post('/image', 'ImageController@store');
=======
Route::post('/test_login', 'Auth\LoginController@authenticated');

Route::post('/check_login', 'Auth\LoginController@doLogin');

Route::post('/logout', 'UserController@logout')->middleware('web');
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23

Route::group(['prefix' => 'user'], function () {
    Route::get('/', 'UserController@index');

    Route::post('/', 'UserController@store');
<<<<<<< HEAD
    
    Route::get('/art', 'UserController@getArt');

    Route::get('/me', 'UserController@getCurrent')->middleware(['web','auth']);
=======

    Route::post('/image', 'UserController@image');
    
    Route::get('/art', 'UserController@getArt');

    Route::get('/me', 'UserController@getCurrent');
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23

    Route::get('/{user_id}', 'UserController@show')->where('user_id', '[0-9]+');

    Route::patch('/{user_id}', 'UserController@update')->where('user_id', '[0-9]+');

    Route::delete('/{user_id}', 'UserController@destroy')->where('user_id', '[0-9]+');

    // ->middleware('auth');

    Route::get('/search', 'UserController@search');
    
    Route::get('/search/{param}/{text}', 'UserController@searchByParam');

    Route::get('/wallet_transaction_list/{user}', 'WalletTransactionController@getUserTransaction');
});