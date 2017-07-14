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

    Route::get('/{id}', 'AdditionalInfoController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'AdditionalInfoController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'AdditionalInfoController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'AdditionalInfoController@searchByParam');
});
