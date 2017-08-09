<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Report
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'report', 'middleware' => ['api']], function () {
    Route::get('/', 'ReportController@index');

    Route::post('/', 'ReportController@store');

    Route::get('/{report_id}', 'ReportController@show')->where('report_id', '[0-9]+');

    Route::get('/user/{user_id}', 'ReportController@getByUser')->where('user_id', '[0-9]+');

    Route::patch('/{report_id}', 'ReportController@update')->where('report_id', '[0-9]+');

    Route::delete('/{report_id}', 'ReportController@destroy')->where('report_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'ReportController@searchByParam');
});
