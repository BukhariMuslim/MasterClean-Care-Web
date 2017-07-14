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

    Route::get('/{request_id}/requested_art/{art_id}', 'RequestedArtController@show')->where('request_id', '[0-9]+')->where('art_id', '[0-9]+');
    
    Route::patch('/{request_id}/requested_art/{art_id}', 'RequestedArtController@update')->where('request_id', '[0-9]+')->where('art_id', '[0-9]+');

    Route::delete('/{request_id}/requested_art/{art_id}', 'RequestedArtController@destroy')->where('request_id', '[0-9]+')->where('art_id', '[0-9]+');

    Route::get('/', 'RequestController@index');

    Route::post('/', 'RequestController@store');

    Route::get('/{art_id}', 'RequestController@show')->where('art_id', '[0-9]+');
    
    Route::patch('/{art_id}', 'RequestController@update')->where('art_id', '[0-9]+');

    Route::delete('/{art_id}', 'RequestController@destroy')->where('art_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'RequestController@searchByParam');

});
