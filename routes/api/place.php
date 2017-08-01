<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Place
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'place', 'middleware' => ['api']], function () {
    Route::get('/', 'PlaceController@index');

    Route::post('/', 'PlaceController@store');

    Route::get('/{place_id}', 'PlaceController@show')->where('place_id', '[0-9]+');

    Route::patch('/{place_id}', 'PlaceController@update')->where('place_id', '[0-9]+');

    Route::delete('/{place_id}', 'PlaceController@destroy')->where('place_id', '[0-9]+');

    Route::get('/search/{param}/{operator}/{text}', 'PlaceController@searchByParam');
    
    Route::get('/search/{param}/{text}', 'PlaceController@searchByParam');

});
