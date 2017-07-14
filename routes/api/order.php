<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Order
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'order', 'middleware' => ['api']], function () {

    Route::get('/{order_id}/task_list', 'TaskListController@index')->where('order_id', '[0-9]+');

    Route::post('/{order_id}/task_list', 'TaskListController@store')->where('order_id', '[0-9]+');

    Route::get('/{order_id}/task_list/{task_list_id}', 'TaskListController@show')->where('order_id', '[0-9]+')->where('task_list_id', '[0-9]+');
    
    Route::patch('/{order_id}/task_list/{task_list_id}', 'TaskListController@update')->where('order_id', '[0-9]+')->where('task_list_id', '[0-9]+');

    Route::delete('/{order_id}/task_list/{task_list_id}', 'TaskListController@destroy')->where('order_id', '[0-9]+')->where('task_list_id', '[0-9]+');

    Route::get('/{order_id}/review_order', 'ReviewOrderController@index')->where('order_id', '[0-9]+');

    Route::post('/{order_id}/review_order', 'ReviewOrderController@store')->where('order_id', '[0-9]+');

    Route::get('/{order_id}/review_order/{task_list_id}', 'ReviewOrderController@show')->where('order_id', '[0-9]+')->where('task_list_id', '[0-9]+');
    
    Route::patch('/{order_id}/review_order/{task_list_id}', 'ReviewOrderController@update')->where('order_id', '[0-9]+')->where('task_list_id', '[0-9]+');

    Route::delete('/{order_id}/review_order/{task_list_id}', 'ReviewOrderController@destroy')->where('order_id', '[0-9]+')->where('task_list_id', '[0-9]+');

    Route::get('/', 'OrderController@index');

    Route::post('/', 'OrderController@store');

    Route::get('/{task_list_id}', 'OrderController@show')->where('task_list_id', '[0-9]+');
    
    Route::patch('/{task_list_id}', 'OrderController@update')->where('task_list_id', '[0-9]+');

    Route::delete('/{task_list_id}', 'OrderController@destroy')->where('task_list_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'OrderController@searchByParam');

});
