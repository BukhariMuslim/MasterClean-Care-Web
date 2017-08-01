<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| AdditionalInfo
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'additional_info', 'middleware' => ['api']], function () {
    Route::get('/', 'AdditionalInfoController@index');

    Route::post('/', 'AdditionalInfoController@store');

    Route::get('/{info_id}', 'AdditionalInfoController@show')->where('info_id', '[0-9]+');

    Route::patch('/{info_id}', 'AdditionalInfoController@update')->where('info_id', '[0-9]+');

    Route::delete('/{info_id}', 'AdditionalInfoController@destroy')->where('info_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'AdditionalInfoController@searchByParam');
});
