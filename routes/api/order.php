<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Order
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'order', 'middleware' => ['api']], function () {

    Route::get('/{order_id}/order_task_list', 'OrderTaskListController@index')->where('order_id', '[0-9]+');

    Route::post('/{order_id}/order_task_list', 'OrderTaskListController@store')->where('order_id', '[0-9]+');

    Route::get('/{order_id}/order_task_list/{order_task_list_id}', 'OrderTaskListController@show')->where('order_id', '[0-9]+')->where('order_task_list_id', '[0-9]+');
    
    Route::patch('/{order_id}/order_task_list/{order_task_list_id}', 'OrderTaskListController@update')->where('order_id', '[0-9]+')->where('order_task_list_id', '[0-9]+');

    Route::delete('/{order_id}/order_task_list/{order_task_list_id}', 'OrderTaskListController@destroy')->where('order_id', '[0-9]+')->where('order_task_list_id', '[0-9]+');

    Route::get('/{order_id}/review_order', 'ReviewOrderController@index')->where('order_id', '[0-9]+');

    Route::post('/{order_id}/review_order', 'ReviewOrderController@store')->where('order_id', '[0-9]+');

    Route::get('/{order_id}/review_order/{order_task_list_id}', 'ReviewOrderController@show')->where('order_id', '[0-9]+')->where('order_task_list_id', '[0-9]+');
    
    Route::patch('/{order_id}/review_order/{order_task_list_id}', 'ReviewOrderController@update')->where('order_id', '[0-9]+')->where('order_task_list_id', '[0-9]+');

    Route::delete('/{order_id}/review_order/{order_task_list_id}', 'ReviewOrderController@destroy')->where('order_id', '[0-9]+')->where('order_task_list_id', '[0-9]+');

    Route::get('/', 'OrderController@index');

    Route::post('/', 'OrderController@store');

    Route::get('/{order_task_list_id}', 'OrderController@show')->where('order_task_list_id', '[0-9]+');
    
    Route::patch('/{order_task_list_id}', 'OrderController@update')->where('order_task_list_id', '[0-9]+');

    Route::delete('/{order_task_list_id}', 'OrderController@destroy')->where('order_task_list_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'OrderController@searchByParam');

});
