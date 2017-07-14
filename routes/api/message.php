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

    Route::get('/{message_id}', 'MessageController@show')->where('message_id', '[0-9]+');

    Route::patch('/{message_id}', 'MessageController@update')->where('message_id', '[0-9]+');

    Route::delete('/{message_id}', 'MessageController@destroy')->where('message_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'MessageController@searchByParam');
});
