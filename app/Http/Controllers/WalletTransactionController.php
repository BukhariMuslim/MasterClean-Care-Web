<?php

namespace App\Http\Controllers;

use App\Models\WalletTransaction;
use Illuminate\Http\Request;
use App\Helpers\Operators;
use Exception;

class WalletTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WalletTransaction::all();
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
            
            $walletTransaction = WalletTransaction::create($data);

            return response()->json([ 'data' => $walletTransaction, 
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
     * @param  \App\Models\WalletTransaction  $walletTransaction
     * @return \Illuminate\Http\Response
     */
    public function show(WalletTransaction $walletTransaction)
    {
        return $walletTransaction;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WalletTransaction  $walletTransaction
     * @return \Illuminate\Http\Response
     */
    public function edit(WalletTransaction $walletTransaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WalletTransaction  $walletTransaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WalletTransaction $walletTransaction)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }

            if (array_key_exists('user_id', $data)) {
                $walletTransaction->user_id = $data['user_id'];
            }
            if (array_key_exists('amount', $data)) {
                $walletTransaction->amount = $data['amount'];
            }
            if (array_key_exists('trc_type', $data)) {
                $walletTransaction->trc_type = $data['trc_type'];
            }
            if (array_key_exists('trc_time', $data)) {
                $walletTransaction->trc_time = $data['trc_time'];
            }

            $walletTransaction->save();

            return response()->json([ 'data' => $walletTransaction, 
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
     * @param  \App\Models\WalletTransaction  $walletTransaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(WalletTransaction $walletTransaction)
    {
        $walletTransaction->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WalletTransaction  $walletTransaction
     * @param  Parameter  $user
     * @return \Illuminate\Http\Response
     */
    public function getUserTransaction(Request $request, WalletTransaction $walletTransaction, $user)
    {
        return $walletTransaction
            ->where('user_id', $user)
            ->get();
    }
}
