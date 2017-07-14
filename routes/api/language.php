<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Language
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'language', 'middleware' => ['api']], function () {
    Route::get('/', 'LanguageController@index');

    Route::post('/', 'LanguageController@store');

    Route::get('/{id}', 'LanguageController@show')->where('id', '[0-9]+');

    Route::patch('/{id}', 'LanguageController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'LanguageController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'LanguageController@searchByParam');
});
