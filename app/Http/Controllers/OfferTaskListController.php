<?php

namespace App\Http\Controllers;

use App\Models\OfferTaskList;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class OfferTaskListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OfferTaskList::all();
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

            $OfferTaskList = OfferTaskList::create($data);

            return response()->json([ 'data' => $OfferTaskList, 
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
     * @param  \App\Models\OfferTaskList  $OfferTaskList
     * @return \Illuminate\Http\Response
     */
    public function show(OfferTaskList $OfferTaskList)
    {
        return $OfferTaskList;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OfferTaskList  $OfferTaskList
     * @return \Illuminate\Http\Response
     */
    public function edit(OfferTaskList $OfferTaskList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfferTaskList  $OfferTaskList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OfferTaskList $OfferTaskList)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('offer_id', $data)) {
                $OfferTaskList->offer_id = $data['offer_id'];
            }
            if (array_key_exists('task', $data)) {
                $OfferTaskList->task = $data['task'];
            }
            if (array_key_exists('status', $data)) {
                $requestedArt->status = $data['status'];
            }

            $OfferTaskList->save();

            return response()->json([ 'data' => $OfferTaskList, 
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
     * @param  \App\Models\OfferTaskList  $OfferTaskList
     * @return \Illuminate\Http\Response
     */
    public function destroy(OfferTaskList $OfferTaskList)
    {
        $OfferTaskList->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OfferTaskList  $OfferTaskList
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, OfferTaskList $OfferTaskList, $param = 'info', $text)
    {
        return $OfferTaskList
            ->where($param,
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
