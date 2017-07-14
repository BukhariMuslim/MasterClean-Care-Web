<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| EmergencyCall
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'emergency_call', 'middleware' => ['api']], function () {
    Route::get('/', 'EmergencyCallController@index');

    Route::post('/', 'EmergencyCallController@store');

    Route::get('/{id}', 'EmergencyCallController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'EmergencyCallController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'EmergencyCallController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{operator}/{text}', 'EmergencyCallController@searchByParam');
    
    Route::get('/search/{param}/{text}', 'EmergencyCallController@searchByParam');

});
