<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| WorkTime
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'work_time', 'middleware' => ['api']], function () {
    Route::get('/', 'WorkTimeController@index');

    Route::post('/', 'WorkTimeController@store');

    Route::get('/{id}', 'WorkTimeController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'WorkTimeController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'WorkTimeController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'WorkTimeController@searchByParam');
});
