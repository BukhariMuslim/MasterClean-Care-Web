<?php

namespace App\Http\Controllers;

use App\ReviewOrder;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class ReviewOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ReviewOrder::all();
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

            $reviewOrder = ReviewOrder::create($data);

            return response()->json([ 'data' => $reviewOrder, 
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
     * @param  \App\ReviewOrder  $reviewOrder
     * @return \Illuminate\Http\Response
     */
    public function show(ReviewOrder $reviewOrder)
    {
        return $reviewOrder;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ReviewOrder  $reviewOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(ReviewOrder $reviewOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ReviewOrder  $reviewOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReviewOrder $reviewOrder)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('order_id', $data)) {
                $reviewOrder->order_id = $data['order_id'];
            }
            if (array_key_exists('rate', $data)) {
                $reviewOrder->rate = $data['rate'];
            }
            if (array_key_exists('remark', $data)) {
                $reviewOrder->remark = $data['remark'];
            }

            $reviewOrder->save();

            return response()->json([ 'data' => $reviewOrder, 
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
     * @param  \App\ReviewOrder  $reviewOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReviewOrder $reviewOrder)
    {
        $reviewOrder->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ReviewOrder  $reviewOrder
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, ReviewOrder $reviewOrder, $param = 'info', $text)
    {
        return $reviewOrder
            ->where($param,
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
