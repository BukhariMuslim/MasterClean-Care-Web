<?php

namespace App\Http\Controllers;

use App\Models\UserWallet;
use Illuminate\Http\Request;
use App\Helper\Operators;
use Exception;

class UserWalletController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserWallet::all();
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

            $userWallet = UserWallet::create($data);

            return response()->json([ 'data' => $userWallet, 
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
     * @param  \App\Models\UserWallet  $userWallet
     * @return \Illuminate\Http\Response
     */
    public function show(UserWallet $userWallet)
    {
        return $userWallet;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserWallet  $userWallet
     * @return \Illuminate\Http\Response
     */
    public function edit(UserWallet $userWallet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserWallet  $userWallet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserWallet $userWallet)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('user_id', $data)) {
                $userWallet->user_id = $data['user_id'];
            }
            if (array_key_exists('wallet_id', $data)) {
                $userWallet->wallet_id = $data['wallet_id'];
            }

            $userWallet->save();

            return response()->json([ 'data' => $userWallet, 
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
     * @param  \App\Models\UserWallet  $userWallet
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserWallet $userWallet)
    {
        $userWallet->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }
}
