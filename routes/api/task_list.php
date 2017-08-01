<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Wallet
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'task_list', 'middleware' => ['api']], function () {
    Route::get('/', 'TaskListController@index');

    Route::post('/', 'TaskListController@store');

    Route::get('/{task_list_id}', 'TaskListController@show')->where('task_list_id', '[0-9]+');

    Route::patch('/{task_list_id}', 'TaskListController@update')->where('task_list_id', '[0-9]+');

    Route::delete('/{task_list_id}', 'TaskListController@destroy')->where('task_list_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'TaskListController@searchByParam');
});
