<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Request
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'request', 'middleware' => ['api']], function () {

    Route::get('/{request_id}/requested_art', 'RequestedArtController@index')->where('request_id', '[0-9]+');

    Route::post('/{request_id}/requested_art', 'RequestedArtController@store')->where('request_id', '[0-9]+');

    Route::get('/{request_id}/requested_art/{id}', 'RequestedArtController@show')->where('request_id', '[0-9]+')->where('id', '[0-9]+');
    
    Route::patch('/{request_id}/requested_art/{id}', 'RequestedArtController@update')->where('request_id', '[0-9]+')->where('id', '[0-9]+');

    Route::delete('/{request_id}/requested_art/{id}', 'RequestedArtController@destroy')->where('request_id', '[0-9]+')->where('id', '[0-9]+');

    Route::get('/', 'RequestController@index');

    Route::post('/', 'RequestController@store');

    Route::get('/{id}', 'RequestController@show')->where('id', '[0-9]+');
    
    Route::patch('/{id}', 'RequestController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'RequestController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'RequestController@searchByParam');

});
