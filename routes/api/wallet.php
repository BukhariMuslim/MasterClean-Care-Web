<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Wallet
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'wallet', 'middleware' => ['api']], function () {
    Route::get('/', 'WalletController@index');

    Route::post('/', 'WalletController@store');

    Route::get('/{id}', 'WalletController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'WalletController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'WalletController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'WalletController@searchByParam');
});
