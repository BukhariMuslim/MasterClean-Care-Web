<?php

namespace App\Http\Controllers;

use App\Models\RequestedArt;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class RequestedArtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RequestedArt::all();
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

            $requestedArt = RequestedArt::create($data);

            return response()->json([ 'data' => $requestedArt, 
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
     * @param  \App\RequestedArt  $requestedArt
     * @return \Illuminate\Http\Response
     */
    public function show(RequestedArt $requestedArt)
    {
        return $requestedArt;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\RequestedArt  $requestedArt
     * @return \Illuminate\Http\Response
     */
    public function edit(RequestedArt $requestedArt)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RequestedArt  $requestedArt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RequestedArt $requestedArt)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('request_id', $data)) {
                $requestedArt->request_id = $data['request_id'];
            }
            if (array_key_exists('art_id', $data)) {
                $requestedArt->art_id = $data['art_id'];
            }
            if (array_key_exists('status', $data)) {
                $requestedArt->status = $data['status'];
            }

            $requestedArt->save();

            return response()->json([ 'data' => $requestedArt, 
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
     * @param  \App\RequestedArt  $requestedArt
     * @return \Illuminate\Http\Response
     */
    public function destroy(RequestedArt $requestedArt)
    {
        $requestedArt->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\RequestedArt  $requestedArt
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, RequestedArt $requestedArt, $param = 'info', $text)
    {
        return $requestedArt
            ->where($param,
                Operator::LIKE,
                '%'.$text.'%')
            ->get();
    }
}
