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

    Route::get('/{wallet_id}', 'WalletController@show')->where('wallet_id', '[0-9]+');

    Route::patch('/{wallet_id}', 'WalletController@update')->where('wallet_id', '[0-9]+');

    Route::delete('/{wallet_id}', 'WalletController@destroy')->where('wallet_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'WalletController@searchByParam');
});
