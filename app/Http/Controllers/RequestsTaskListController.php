<?php

namespace App\Http\Controllers;

use App\Models\RequestsTaskList;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class RequestsTaskListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RequestsTaskList::all();
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

            $RequestsTaskList = RequestsTaskList::create($data);

            return response()->json([ 'data' => $RequestsTaskList, 
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
     * @param  \App\RequestsTaskList  $RequestsTaskList
     * @return \Illuminate\Http\Response
     */
    public function show(RequestsTaskList $RequestsTaskList)
    {
        return $RequestsTaskList;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\RequestsTaskList  $RequestsTaskList
     * @return \Illuminate\Http\Response
     */
    public function edit(RequestsTaskList $RequestsTaskList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RequestsTaskList  $RequestsTaskList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RequestsTaskList $RequestsTaskList)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('requests_id', $data)) {
                $RequestsTaskList->requests_id = $data['requests_id'];
            }
            if (array_key_exists('task', $data)) {
                $RequestsTaskList->task = $data['task'];
            }
            if (array_key_exists('status', $data)) {
                $requestedArt->status = $data['status'];
            }

            $RequestsTaskList->save();

            return response()->json([ 'data' => $RequestsTaskList, 
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
     * @param  \App\RequestsTaskList  $RequestsTaskList
     * @return \Illuminate\Http\Response
     */
    public function destroy(RequestsTaskList $RequestsTaskList)
    {
        $RequestsTaskList->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RequestsTaskList  $RequestsTaskList
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, RequestsTaskList $RequestsTaskList, $param = 'info', $text)
    {
        return $RequestsTaskList
            ->where($param,
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
