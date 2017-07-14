<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Article
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'article', 'middleware' => ['api']], function () {

    Route::get('/{article_id}/comment', 'CommentController@index')->where('article_id', '[0-9]+');

    Route::post('/{article_id}/comment', 'CommentController@store')->where('article_id', '[0-9]+');

    Route::get('/{article_id}/comment/{id}', 'CommentController@show')->where('article_id', '[0-9]+')->where('id', '[0-9]+');
    
    Route::patch('/{article_id}/comment/{id}', 'CommentController@update')->where('article_id', '[0-9]+')->where('id', '[0-9]+');

    Route::delete('/{article_id}/comment/{id}', 'CommentController@destroy')->where('article_id', '[0-9]+')->where('id', '[0-9]+');

    Route::get('/', 'ArticleController@index');

    Route::post('/', 'ArticleController@store');

    Route::get('/{id}', 'ArticleController@show')->where('id', '[0-9]+');
    
    Route::patch('/{id}', 'ArticleController@update')->where('id', '[0-9]+');

    Route::delete('/{id}', 'ArticleController@destroy')->where('id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'ArticleController@searchByParam');

});
