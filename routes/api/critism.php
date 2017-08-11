<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Critism
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'critism', 'middleware' => ['api']], function () {
    Route::get('/', 'CritismController@index');

    Route::post('/', 'CritismController@store');

    Route::get('/{critism_id}', 'CritismController@show')->where('critism_id', '[0-9]+');

    // Route::get('/user/{user_id}', 'CritismController@getByUser')->where('user_id', '[0-9]+');

    Route::patch('/{critism_id}', 'CritismController@update')->where('critism_id', '[0-9]+');

    Route::delete('/{critism_id}', 'CritismController@destroy')->where('critism_id', '[0-9]+');

    // Route::get('/search/{param}/{text}', 'CritismController@searchByParam');
});
