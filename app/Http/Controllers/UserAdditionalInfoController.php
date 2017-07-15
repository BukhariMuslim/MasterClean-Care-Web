<?php

namespace App\Http\Controllers;

use App\Models\UserAdditionalInfo;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class UserAdditionalInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserAdditionalInfo::all();
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

            $userAdditionalInfo = UserAdditionalInfo::create($data);

            return response()->json([ 'data' => $userAdditionalInfo, 
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
     * @param  \App\UserAdditionalInfo  $userAdditionalInfo
     * @return \Illuminate\Http\Response
     */
    public function show(UserAdditionalInfo $userAdditionalInfo)
    {
        return $userAdditionalInfo;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserAdditionalInfo  $userAdditionalInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(UserAdditionalInfo $userAdditionalInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserAdditionalInfo  $userAdditionalInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserAdditionalInfo $userAdditionalInfo)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }

            if (array_key_exists('user_id', $data)) {
                $userAdditionalInfo->user_id = $data['user_id'];
            }
            if (array_key_exists('info_id', $data)) {
                $userAdditionalInfo->info_id = $data['info_id'];
            }

            $userAdditionalInfo->save();

            return response()->json([ 'data' => $userAdditionalInfo, 
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
     * @param  \App\UserAdditionalInfo  $userAdditionalInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserAdditionalInfo $userAdditionalInfo)
    {
        $userAdditionalInfo->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }
}
