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

    Route::get('/{emergency_call_id}', 'EmergencyCallController@show')->where('emergency_call_id', '[0-9]+');

    Route::patch('/{emergency_call_id}', 'EmergencyCallController@update')->where('emergency_call_id', '[0-9]+');

    Route::delete('/{emergency_call_id}', 'EmergencyCallController@destroy')->where('emergency_call_id', '[0-9]+');

    Route::get('/get/{userId}/{status}', 'EmergencyCallController@searchByUserStatus');
    
    Route::get('/search/{param}/{text}', 'EmergencyCallController@searchByParam');

});
