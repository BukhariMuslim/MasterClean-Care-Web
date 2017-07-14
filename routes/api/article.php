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

    Route::get('/{article_id}/comment/{comment_id}', 'CommentController@show')->where('article_id', '[0-9]+')->where('comment_id', '[0-9]+');
    
    Route::patch('/{article_id}/comment/{comment_id}', 'CommentController@update')->where('article_id', '[0-9]+')->where('comment_id', '[0-9]+');

    Route::delete('/{article_id}/comment/{comment_id}', 'CommentController@destroy')->where('article_id', '[0-9]+')->where('comment_id', '[0-9]+');

    Route::get('/', 'ArticleController@index');

    Route::post('/', 'ArticleController@store');

    Route::get('/{comment_id}', 'ArticleController@show')->where('comment_id', '[0-9]+');
    
    Route::patch('/{comment_id}', 'ArticleController@update')->where('comment_id', '[0-9]+');

    Route::delete('/{comment_id}', 'ArticleController@destroy')->where('comment_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'ArticleController@searchByParam');

});
