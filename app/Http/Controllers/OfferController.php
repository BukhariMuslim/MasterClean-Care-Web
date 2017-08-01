<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;
use App\Helper\Operators;
use Exception;
use DB;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Offer::with([
            'member',
            'workTime',
            'contact',
            'offer_art',
            'offerTaskList',
            'job',
        ])->get();
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

            DB::beginTransaction();
            
            $offer = Offer::create($data);

            $offer->contact()->create($data['contact']);

            $offer->offerTaskList()->createMany($data['offerTaskList']);

            DB::commit();

            return response()->json([ 'data' => $offer->load([
                                                'member',
                                                'workTime',
                                                'contact',
                                                'offer_art',
                                                'offerTaskList',
                                            ]), 
                                      'status' => 201]);
        }
        catch(Exception $e) {
            DB::rollBack();

            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function show(Offer $offer)
    {
        return $offer->load([
            'member',
            'workTime',
            'contact',
            'offer_art',
            'offerTaskList',
            'job',
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function edit(Offer $offer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Offer $offer)
    {
        $data = $request->all();

        try {
            DB::beginTransaction();

            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('member_id', $data)) {
                $offer->member_id = $data['member_id'];
            }
            if (array_key_exists('work_time_id', $data)) {
                $offer->work_time_id = $data['work_time_id'];
            }
            if (array_key_exists('job_id', $data)) {
                $offer->job_id = $data['job_id'];
            }
            if (array_key_exists('cost', $data)) {
                $offer->cost = $data['cost'];
            }
            if (array_key_exists('start_date', $data)) {
                $offer->start_date = $data['start_date'];
            }
            if (array_key_exists('end_date', $data)) {
                $offer->end_date = $data['end_date'];
            }
            if (array_key_exists('remark', $data)) {
                $offer->remark = $data['remark'];
            }
            if (array_key_exists('status', $data)) {
                $offer->status = $data['status'];
            }

            $offer->save();

            if (array_key_exists('contact', $data)) {
                $offer->contact()->delete();
                $offer->contact()->create($data['contact']);
            }
            
            if (array_key_exists('offerTaskList', $data)) {
                $offer->offerTaskList()->delete();
                $offer->offerTaskList()->createMany($data['offerTaskList']);
            }

            DB::commit();

            return response()->json([ 'data' => $offer->load([
                                                    'member',
                                                    'workTime',
                                                    'contact',
                                                    'offer_art',
                                                    'offerTaskList',
                                                ]), 
                                      'status' => 200]);
        }
        catch(Exception $e) {
            DB::rollBack();

            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Offer $offer)
    {
        $offer->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, Offer $offer, $param = 'info', $text)
    {
        return $offer
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }

    /**
     * Search the specified resource from storage by member.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @param  Parameter  $member
     * @return \Illuminate\Http\Response
     */
    public function getByMember(Request $request, Offer $offer, $member)
    {
        return $offer
            ->where('member_id', $member)
            ->get()
            ->load([
                'member',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ]);
    }

    /**
     * Search the specified resource from storage by member.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @param  Parameter  $status
     * @return \Illuminate\Http\Response
     */
    public function getByStatus(Request $request, Offer $offer, $status)
    {
        return $offer
            ->where('status', $status)
            ->get()
            ->load([
                'member',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ]);
    }
}
