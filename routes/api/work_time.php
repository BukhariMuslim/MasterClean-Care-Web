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

    Route::get('/{work_time_id}', 'WorkTimeController@show')->where('work_time_id', '[0-9]+');

    Route::patch('/{work_time_id}', 'WorkTimeController@update')->where('work_time_id', '[0-9]+');

    Route::delete('/{work_time_id}', 'WorkTimeController@destroy')->where('work_time_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'WorkTimeController@searchByParam');
});
