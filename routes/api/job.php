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

    Route::get('/{id}', 'JobController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'JobController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'JobController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'JobController@searchByParam');
});
