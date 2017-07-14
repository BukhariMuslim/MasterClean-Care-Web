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

    Route::get('/{id}', 'PlaceController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'PlaceController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'PlaceController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{operator}/{text}', 'PlaceController@searchByParam');
    
    Route::get('/search/{param}/{text}', 'PlaceController@searchByParam');

});
