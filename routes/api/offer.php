<?php

use Illuminate\Http\Offer;

/*
|--------------------------------------------------------------------------
| Offer
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'offer', 'middleware' => ['api']], function () {

    Route::get('/{offer_id}/offer_art', 'OfferArtController@getByOffer')->where('offer_id', '[0-9]+');

    Route::post('/{offer_id}/offer_art', 'OfferArtController@store')->where('offer_id', '[0-9]+');

    Route::get('/{offer_id}/offer_art/{user_id}', 'OfferArtController@showByOfferArt')->where('offer_id', '[0-9]+')->where('user_id', '[0-9]+');
    
    Route::patch('/offer_art/{offer_art_id}', 'OfferArtController@update')->where('offer_art_id', '[0-9]+');

    Route::delete('/{offer_id}/offer_art/{user_id}', 'OfferArtController@destroy')->where('offer_id', '[0-9]+')->where('user_id', '[0-9]+');

    Route::get('/{offer_id}/offer_task_list', 'OfferTaskListController@index')->where('offer_id', '[0-9]+');

    Route::post('/{offer_id}/offer_task_list', 'OfferTaskListController@store')->where('offer_id', '[0-9]+');

    Route::get('/{offer_id}/offer_task_list/{offer_task_list_id}', 'OfferTaskListController@show')->where('offer_id', '[0-9]+')->where('offer_task_list_id', '[0-9]+');
    
    Route::patch('/{offer_id}/offer_task_list/{offer_task_list_id}', 'OfferTaskListController@update')->where('offer_id', '[0-9]+')->where('offer_task_list_id', '[0-9]+');

    Route::delete('/{offer_id}/offer_task_list/{offer_task_list_id}', 'OfferTaskListController@destroy')->where('offer_id', '[0-9]+')->where('offer_task_list_id', '[0-9]+');

    Route::get('/', 'OfferController@index');

    Route::post('/', 'OfferController@store');

    Route::get('/{offer_id}', 'OfferController@show')->where('offer_id', '[0-9]+');

    Route::get('/full/{offer_id}', 'OfferController@showFull')->where('offer_id', '[0-9]+');

    Route::get('/full', 'OfferController@getOffer');

    Route::get('/full/user/{member}', 'OfferController@getOfferByMember')->where('member', '[0-9]+');

    Route::get('/member/{member}', 'OfferController@getByMember')->where('member', '[0-9]+');

    Route::get('/status/{status}', 'OfferController@getByStatus')->where('status', '[0-9]+');
    
    Route::get('/art/{user_id}', 'OfferArtController@getByArt')->where('user_id', '[0-9]+');

    Route::get('/offer_art/status/{status}', 'OfferArtController@getByStatus')->where('status', '[0-9]+');

    Route::patch('/{offer_id}', 'OfferController@update')->where('offer_id', '[0-9]+');

    Route::delete('/{offer_id}', 'OfferController@destroy')->where('offer_id', '[0-9]+');

    Route::get('/search', 'OfferController@search');

    Route::get('/search/{user}', 'OfferController@searchByUser')->where('user', '[0-9]+');
    
    Route::get('/search/{param}/{text}', 'OfferController@searchByParam');

});
