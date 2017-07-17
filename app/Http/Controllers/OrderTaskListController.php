<?php

namespace App\Http\Controllers;

use App\Models\OrderTaskList;
use Illuminate\Http\Request;
use App\Helper\Operators;
use Exception;

class OrderTaskListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OrderTaskList::all();
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

            $OrderTaskList = OrderTaskList::create($data);

            return response()->json([ 'data' => $OrderTaskList, 
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
     * @param  \App\Models\OrderTaskList  $OrderTaskList
     * @return \Illuminate\Http\Response
     */
    public function show(OrderTaskList $OrderTaskList)
    {
        return $OrderTaskList;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderTaskList  $OrderTaskList
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderTaskList $OrderTaskList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderTaskList  $OrderTaskList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrderTaskList $OrderTaskList)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('order_id', $data)) {
                $OrderTaskList->order_id = $data['order_id'];
            }
            if (array_key_exists('task', $data)) {
                $OrderTaskList->task = $data['task'];
            }
            if (array_key_exists('status', $data)) {
                $requestedArt->status = $data['status'];
            }

            $OrderTaskList->save();

            return response()->json([ 'data' => $OrderTaskList, 
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
     * @param  \App\Models\OrderTaskList  $OrderTaskList
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderTaskList $OrderTaskList)
    {
        $OrderTaskList->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderTaskList  $OrderTaskList
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, OrderTaskList $OrderTaskList, $param = 'info', $text)
    {
        return $OrderTaskList
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
