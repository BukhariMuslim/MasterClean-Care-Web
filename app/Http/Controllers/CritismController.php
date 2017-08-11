<?php

namespace App\Http\Controllers;

use App\Models\Critism;
use Illuminate\Http\Request;
use Exception;

class CritismController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Critism::all();
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

            $critism = Report::create($data);

            return response()->json([ 'data' => $critism, 
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
     * @param  \App\Models\Critism  $critism
     * @return \Illuminate\Http\Response
     */
    public function show(Critism $critism)
    {
        return $critism;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Critism  $critism
     * @return \Illuminate\Http\Response
     */
    public function edit(Critism $critism)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Critism  $critism
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Critism $critism)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('email', $data)) {
                $critism->email = $data['email'];
            }
            if (array_key_exists('content', $data)) {
                $critism->content = $data['content'];
            }

            $critism->save();

            return response()->json([ 'data' => $critism, 
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
     * @param  \App\Models\Critism  $critism
     * @return \Illuminate\Http\Response
     */
    public function destroy(Critism $critism)
    {
        $critism->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }
}
