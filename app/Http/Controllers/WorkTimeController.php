<?php

namespace App\Http\Controllers;

use App\Models\WorkTime;
use Illuminate\Http\Request;
use App\Helper\Operators;
use Exception;

class WorkTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WorkTime::all();
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

            $workTime = WorkTime::create($data);

            return response()->json([ 'data' => $workTime, 
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
     * @param  \App\Models\WorkTime  $workTime
     * @return \Illuminate\Http\Response
     */
    public function show(WorkTime $workTime)
    {
        return $workTime;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WorkTime  $workTime
     * @return \Illuminate\Http\Response
     */
    public function edit(WorkTime $workTime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkTime  $workTime
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WorkTime $workTime)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }

            if (array_key_exists('work_time', $data)) {
                $workTime->workTime = $data['work_time'];
            }
            
            $workTime->save();

            return response()->json([ 'data' => $workTime, 
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
     * @param  \App\Models\WorkTime  $workTime
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkTime $workTime)
    {
        $workTime->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkTime  $WorkTime
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, WorkTime $workTime, $param = 'amt', $text)
    {
        return $workTime
            ->where($param,
                Operators::EQUAL,
                '%'.$text.'%')
            ->get();
    }
}
