<?php

namespace App\Http\Controllers;

use App\Models\Requests;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Requests::all();
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

            $requests = Requests::create($data);

            return response()->json([ 'data' => $requests, 
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
     * @param  \App\Requests  $requests
     * @return \Illuminate\Http\Response
     */
    public function show(Requests $requests)
    {
        return $requests;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Requests  $requests
     * @return \Illuminate\Http\Response
     */
    public function edit(Requests $requests)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Requests  $requests
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Requests $requests)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('member_id', $data)) {
                $requests->member_id = $data['member_id'];
            }
            if (array_key_exists('work_time_id', $data)) {
                $requests->work_time_id = $data['work_time_id'];
            }
            if (array_key_exists('start_date', $data)) {
                $requests->start_date = $data['start_date'];
            }
            if (array_key_exists('end_date', $data)) {
                $requests->end_date = $data['end_date'];
            }
            if (array_key_exists('province', $data)) {
                $requests->province = $data['province'];
            }
            if (array_key_exists('city', $data)) {
                $requests->city = $data['city'];
            }
            if (array_key_exists('address', $data)) {
                $requests->address = $data['address'];
            }
            if (array_key_exists('location', $data)) {
                $requests->location = $data['location'];
            }
            if (array_key_exists('remark', $data)) {
                $requests->remark = $data['remark'];
            }
            if (array_key_exists('status', $data)) {
                $requests->status = $data['status'];
            }

            $requests->save();

            return response()->json([ 'data' => $requests, 
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
     * @param  \App\Requests  $requests
     * @return \Illuminate\Http\Response
     */
    public function destroy(Requests $requests)
    {
        $requests->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Requests  $requests
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, Requests $requests, $param = 'info', $text)
    {
        return $requests
            ->where($param,
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
