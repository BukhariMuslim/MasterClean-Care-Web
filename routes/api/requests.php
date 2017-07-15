<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Requests
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'requests', 'middleware' => ['api']], function () {

    Route::get('/{requests_id}/requested_art', 'RequestedArtController@index')->where('requests_id', '[0-9]+');

    Route::post('/{requests_id}/requested_art', 'RequestedArtController@store')->where('requests_id', '[0-9]+');

    Route::get('/{requests_id}/requested_art/{art_id}', 'RequestedArtController@show')->where('requests_id', '[0-9]+')->where('art_id', '[0-9]+');
    
    Route::patch('/{requests_id}/requested_art/{art_id}', 'RequestedArtController@update')->where('requests_id', '[0-9]+')->where('art_id', '[0-9]+');

    Route::delete('/{requests_id}/requested_art/{art_id}', 'RequestedArtController@destroy')->where('requests_id', '[0-9]+')->where('art_id', '[0-9]+');

    Route::get('/{requests_id}/requests_task_list', 'RequestsTaskListController@index')->where('requests_id', '[0-9]+');

    Route::post('/{requests_id}/requests_task_list', 'RequestsTaskListController@store')->where('requests_id', '[0-9]+');

    Route::get('/{requests_id}/requests_task_list/{requests_task_list_id}', 'RequestsTaskListController@show')->where('requests_id', '[0-9]+')->where('requests_task_list_id', '[0-9]+');
    
    Route::patch('/{requests_id}/requests_task_list/{requests_task_list_id}', 'RequestsTaskListController@update')->where('requests_id', '[0-9]+')->where('requests_task_list_id', '[0-9]+');

    Route::delete('/{requests_id}/requests_task_list/{requests_task_list_id}', 'RequestsTaskListController@destroy')->where('requests_id', '[0-9]+')->where('requests_task_list_id', '[0-9]+');

    Route::get('/', 'RequestController@index');

    Route::post('/', 'RequestController@store');

    Route::get('/{art_id}', 'RequestController@show')->where('art_id', '[0-9]+');
    
    Route::patch('/{art_id}', 'RequestController@update')->where('art_id', '[0-9]+');

    Route::delete('/{art_id}', 'RequestController@destroy')->where('art_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'RequestController@searchByParam');

});
