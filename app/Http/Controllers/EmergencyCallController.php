<?php

namespace App\Http\Controllers;

use App\Models\EmergencyCall;
use Illuminate\Http\Request;
use App\Helper\Operators;
use Exception;

class EmergencyCallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EmergencyCall::all();
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

            $emergencyCall = EmergencyCall::create($data);

            return response()->json([ 'data' => $emergencyCall, 
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
     * @param  \App\Models\EmergencyCall  $emergencyCall
     * @return \Illuminate\Http\Response
     */
    public function show(EmergencyCall $emergencyCall)
    {
        return $emergencyCall;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EmergencyCall  $emergencyCall
     * @return \Illuminate\Http\Response
     */
    public function edit(EmergencyCall $emergencyCall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EmergencyCall  $emergencyCall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EmergencyCall $emergencyCall)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('user_id', $data)) {
                $emergencyCall->user_id = $data['user_id'];
            }
            if (array_key_exists('init_time', $data)) {
                $emergencyCall->init_time = $data['init_time'];
            }
            if (array_key_exists('status', $data)) {
                $emergencyCall->status= $data['status'];
            }

            $emergencyCall->save();

            return response()->json([ 'data' => $emergencyCall, 
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
     * @param  \App\Models\EmergencyCall  $emergencyCall
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmergencyCall $emergencyCall)
    {
        $emergencyCall->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EmergencyCall  $emergencyCall
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, EmergencyCall $emergencyCall, $param = 'info', $text)
    {
        return $emergencyCall
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
