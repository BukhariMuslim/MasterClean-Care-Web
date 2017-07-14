<?php

namespace App\Http\Controllers;

use App\UserJob;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class UserJobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserJob::all();
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
            $userJob = UserJob::create($data);

            return response()->json([ 'data' => $userJob, 
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
     * @param  \App\UserJob  $userJob
     * @return \Illuminate\Http\Response
     */
    public function show(UserJob $userJob)
    {
        return $userJob;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserJob  $userJob
     * @return \Illuminate\Http\Response
     */
    public function edit(UserJob $userJob)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserJob  $userJob
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserJob $userJob)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            
            if (array_key_exists('user_id', $data)) {
                $userJob->user_id = $data['user_id'];
            }
            if (array_key_exists('job_id', $data)) {
                $userJob->job_id = $data['job_id'];
            }

            $userJob->save();

            return response()->json([ 'data' => $userJob, 
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
     * @param  \App\UserJob  $userJob
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserJob $userJob)
    {
        $userJob->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }
}
