<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Message
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'message', 'middleware' => ['api']], function () {
    Route::get('/', 'MessageController@index');

    Route::post('/', 'MessageController@store');

    Route::get('/{id}', 'MessageController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'MessageController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'MessageController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'MessageController@searchByParam');
});
