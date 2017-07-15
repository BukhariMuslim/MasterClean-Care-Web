<?php

use Illuminate\Http\Offer;

/*
|--------------------------------------------------------------------------
| Offer
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'offer', 'middleware' => ['api']], function () {

    Route::get('/{offer_id}/offer_art', 'OfferArtController@index')->where('offer_id', '[0-9]+');

    Route::post('/{offer_id}/offer_art', 'OfferArtController@store')->where('offer_id', '[0-9]+');

    Route::get('/{offer_id}/offer_art/{art_id}', 'OfferArtController@show')->where('offer_id', '[0-9]+')->where('art_id', '[0-9]+');
    
    Route::patch('/{offer_id}/offer_art/{art_id}', 'OfferArtController@update')->where('offer_id', '[0-9]+')->where('art_id', '[0-9]+');

    Route::delete('/{offer_id}/offer_art/{art_id}', 'OfferArtController@destroy')->where('offer_id', '[0-9]+')->where('art_id', '[0-9]+');

    Route::get('/{offer_id}/offer_task_list', 'OfferTaskListController@index')->where('offer_id', '[0-9]+');

    Route::post('/{offer_id}/offer_task_list', 'OfferTaskListController@store')->where('offer_id', '[0-9]+');

    Route::get('/{offer_id}/offer_task_list/{offer_task_list_id}', 'OfferTaskListController@show')->where('offer_id', '[0-9]+')->where('offer_task_list_id', '[0-9]+');
    
    Route::patch('/{offer_id}/offer_task_list/{offer_task_list_id}', 'OfferTaskListController@update')->where('offer_id', '[0-9]+')->where('offer_task_list_id', '[0-9]+');

    Route::delete('/{offer_id}/offer_task_list/{offer_task_list_id}', 'OfferTaskListController@destroy')->where('offer_id', '[0-9]+')->where('offer_task_list_id', '[0-9]+');

    Route::get('/', 'OfferController@index');

    Route::post('/', 'OfferController@store');

    Route::get('/{art_id}', 'OfferController@show')->where('art_id', '[0-9]+');
    
    Route::patch('/{art_id}', 'OfferController@update')->where('art_id', '[0-9]+');

    Route::delete('/{art_id}', 'OfferController@destroy')->where('art_id', '[0-9]+');

    Route::get('/search/{param}/{text}', 'OfferController@searchByParam');

});
