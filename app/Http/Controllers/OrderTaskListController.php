<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderTaskList;
use Illuminate\Http\Request;
use App\Helpers\Operators;
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

            $orderTaskList = OrderTaskList::create($data);

            return response()->json([ 'data' => $orderTaskList, 
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
     * @param  \App\Models\OrderTaskList  $orderTaskList
     * @param  \App\Models\Order  $Order
     * @return \Illuminate\Http\Response
     */
    public function show(OrderTaskList $orderTaskList)
    {
        return $orderTaskList->load('taskList');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderTaskList  $orderTaskList
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderTaskList $orderTaskList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $Order
     * @param  \App\Models\OrderTaskList  $orderTaskList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order, OrderTaskList $orderTaskList)
    {
        $data = $request->all();

        $orderTaskList->where('order_id', $order->id);
        
        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('order_id', $data)) {
                $orderTaskList->order_id = $data['order_id'];
            }
            if (array_key_exists('task_list_id', $data)) {
                $orderTaskList->task_list_id = $data['task_list_id'];
            }
            if (array_key_exists('status', $data)) {
                $orderTaskList->status = $data['status'];
            }

            $orderTaskList->save();

            return response()->json([ 'data' => $orderTaskList, 
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
     * @param  \App\Models\Order  $Order
     * @param  \App\Models\OrderTaskList  $orderTaskList
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order, OrderTaskList $orderTaskList)
    {
        $orderTaskList->where('order_id', $order->id)->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderTaskList  $orderTaskList
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, OrderTaskList $orderTaskList, $param = 'info', $text)
    {
        return $orderTaskList
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
