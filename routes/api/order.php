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

    Route::get('/{order_id}/task_list/{id}', 'TaskListController@show')->where('order_id', '[0-9]+')->where('id', '[0-9]+');
    
    Route::patch('/{order_id}/task_list/{id}', 'TaskListController@update')->where('order_id', '[0-9]+')->where('id', '[0-9]+');

    Route::delete('/{order_id}/task_list/{id}', 'TaskListController@destroy')->where('order_id', '[0-9]+')->where('id', '[0-9]+');

    Route::get('/{order_id}/review_order', 'ReviewOrderController@index')->where('order_id', '[0-9]+');

    Route::post('/{order_id}/review_order', 'ReviewOrderController@store')->where('order_id', '[0-9]+');

    Route::get('/{order_id}/review_order/{id}', 'ReviewOrderController@show')->where('order_id', '[0-9]+')->where('id', '[0-9]+');
    
    Route::patch('/{order_id}/review_order/{id}', 'ReviewOrderController@update')->where('order_id', '[0-9]+')->where('id', '[0-9]+');

    Route::delete('/{order_id}/review_order/{id}', 'ReviewOrderController@destroy')->where('order_id', '[0-9]+')->where('id', '[0-9]+');

    Route::get('/', 'OrderController@index');

    Route::post('/', 'OrderController@store');

    Route::get('/{id}', 'OrderController@show')->where('id', '[0-9]+');
    
    Route::patch('/{id}', 'OrderController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'OrderController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'OrderController@searchByParam');

});
