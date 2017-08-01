<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Job
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'job', 'middleware' => ['api']], function () {
    Route::get('/', 'JobController@index');

    Route::post('/', 'JobController@store');

    Route::get('/{job_id}', 'JobController@show')->where('job_id', '[0-9]+');

    Route::patch('/{job_id}', 'JobController@update')->where('job_id', '[0-9]+');

    Route::delete('/{job_id}', 'JobController@destroy')->where('job_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'JobController@searchByParam');
});
