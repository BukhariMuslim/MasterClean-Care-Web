<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| WalletTransaction
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'wallet_transaction', 'middleware' => ['api']], function () {
    Route::get('/', 'WalletTransactionController@index');

    Route::post('/', 'WalletTransactionController@store');

    Route::post('/image', 'ImageController@storeTrc');

    Route::get('/{wallet_transaction_id}', 'WalletTransactionController@show')->where('wallet_transaction_id', '[0-9]+');

    Route::patch('/{wallet_transaction_id}', 'WalletTransactionController@update')->where('wallet_transaction_id', '[0-9]+');

    Route::delete('/{wallet_transaction_id}', 'WalletTransactionController@destroy')->where('wallet_transaction_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'WalletTransactionController@searchByParam');
});
