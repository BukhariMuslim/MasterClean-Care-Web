<?php

namespace App\Http\Controllers;

use App\Models\OfferArt;
use Illuminate\Http\Request;
use App\Helper\Operators;
use App\Models\Offer;
use App\Models\User;
use Exception;

class OfferArtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OfferArt::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        
        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }

            $offerArt = OfferArt::create($data);

            return response()->json([ 'data' => $offerArt, 
                                      'status' => 201]);
        }
        catch(Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @param  \App\Models\Offer  $offer
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function showByOfferArt(OfferArt $offerArt, Offer $offer, User $user)
    {
        return $offerArt->where('offer_id', $offer->id)->where('art_id', $user->id)->get()->load(['offer', 'art']);;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @return \Illuminate\Http\Response
     */
    public function show(OfferArt $offerArt)
    {
        return $offerArt;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @return \Illuminate\Http\Response
     */
    public function edit(OfferArt $offerArt)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfferArt  $offerArt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OfferArt $offerArt)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('request_id', $data)) {
                $offerArt->request_id = $data['request_id'];
            }
            if (array_key_exists('art_id', $data)) {
                $offerArt->art_id = $data['art_id'];
            }
            if (array_key_exists('status', $data)) {
                $offerArt->status = $data['status'];
            }

            $offerArt->save();

            return response()->json([ 'data' => $offerArt, 
                                      'status' => 200]);
        }
        catch(Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @return \Illuminate\Http\Response
     */
    public function destroy(OfferArt $offerArt)
    {
        $offerArt->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfferArt  $offerArt
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, OfferArt $offerArt, $param = 'info', $text)
    {
        return $offerArt
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function getByOffer(OfferArt $offerArt, Offer $offer)
    {
        return $offerArt->where('offer_id', $offer->id)->get()->load(['art']);
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function getByArt(OfferArt $offerArt, User $user)
    {
        return $offerArt->where('art_id', $user->id)->get()->load(['offer', 'art']);
    }
}
