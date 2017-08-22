<?php

namespace App\Http\Controllers;

use App\Models\OfferArt;
use Illuminate\Http\Request;
use App\Helpers\Operators;
use App\Models\Offer;
use App\Models\Order;
use App\Models\WalletTransaction;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use DB;

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
        return $offerArt->where('offer_id', $offer->id)->where('art_id', $user->id)->get()->load(['offer', 'art']);
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
            DB::beginTransaction();

            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('offer_id', $data)) {
                $offerArt->offer_id = $data['offer_id'];
            }
            if (array_key_exists('art_id', $data)) {
                $offerArt->art_id = $data['art_id'];
            }
            if (array_key_exists('status', $data)) {
                if ($offerArt->status == 0 && $data['status'] == 1) {
                    // Find Offer
                    $offer = Offer::find($offerArt->offer_id);
                    if ($offer) {
                        $offer->update([
                            'status' => 1
                        ]);
                        
                        // Add Wallet Transaction
                        $walletTransaction = WalletTransaction::create([
                            'user_id' => $offer->member_id,
                            'amount' => $offer->cost,
                            'trc_type' => 1, // Keluar
                            'trc_time' => Carbon::now(),
                            'trc_img' => '',
                            'acc_no' => '',
                            'status' => 0,
                        ]);

                        // Add Order
                        $order = Order::create([
                            'member_id' => $offer->member_id,
                            'art_id' => $offerArt->art_id,
                            'work_time_id' => $offer->work_time_id,
                            'job_id' => $offer->job_id,
                            'wallet_transaction_id' => $walletTransaction->id,
                            'cost' => $offer->cost,
                            'start_date' => $offer->start_date,
                            'end_date' => $offer->end_date,
                            'remark' => $offer->remark,
                            'status' => 0,
                            'status_member' => 0,
                            'status_art' => 0,
                        ]);
                        
                        // Get Other ART
                        OfferArt::where('offer_id', $offerArt->offer_id)
                            ->where('art_id', '!=', $offerArt->art_id)
                            ->update([
                                'status' => 2
                            ]);
                    }
                    else {
                        throw new Exception('Penawaran tidak ditemukan.');
                    }
                }
                
                $offerArt->status = $data['status'];
            }

            $offerArt->save();

            DB::commit();

            if (array_key_exists('webMode', $data)) {
                $offer = Offer::with([
                    'member.contact',
                    'workTime',
                    'contact',
                    'offer_art.art',
                    'offerTaskList',
                    'job',
                ])
                ->find($offerArt->offer_id);

                return response()->json([ 'data' => $offer, 
                                          'status' => 200]);
            }
            else {
                return response()->json([ 'data' => $offerArt, 
                                          'status' => 200]);
            }
        }
        catch(Exception $e) {
            DB::rollback();
            
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\OfferArt  $offerArt
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(OfferArt $offerArt)
    // {
    //     $offerArt->delete();

    //     return response()->json([ 'message' => 'Deleted Success', 
    //                               'status' => 200]);
    // }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @param  \App\Models\Offer  $offer
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(OfferArt $offerArt, Offer $offer, User $user)
    {
        $offerArt = $offerArt->where('offer_id', $offer->id)->where('art_id', $user->id);

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
        return Offer::whereHas('offer_art', function($query) use ($user) {
            $query->where('art_id', $user->id);
        })->with([
            'member',
            'contact',
            'offer_art',
            'offerTaskList',
        ])->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OfferArt  $offerArt
     * @param  Param  $status
     * @return \Illuminate\Http\Response
     */
    public function getByStatus(OfferArt $offerArt, $status)
    {
        return Offer::whereHas('offer_art', function($query) use ($status) {
            $query->where('status', $status);
        })->with([
            'member',
            'contact',
            'offer_art',
            'offerTaskList',
        ])->get();
    }
}
