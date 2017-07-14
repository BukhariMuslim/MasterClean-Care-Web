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

    Route::get('/{language_id}', 'LanguageController@show')->where('language_id', '[0-9]+');

    Route::patch('/{language_id}', 'LanguageController@update')->where('language_id', '[0-9]+');

    Route::delete('/{language_id}', 'LanguageController@destroy')->where('language_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'LanguageController@searchByParam');
});
