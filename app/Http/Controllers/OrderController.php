<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Models\WalletTransaction;
use Illuminate\Http\Request;
use App\Helpers\Operators;
use Carbon\Carbon;
use Exception;
use DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Order::with([
            'member',
            'art',
            'workTime',
            'reviewOrder',
            'contact',
            'orderTaskList',
            'job',
        ])->get();
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

            DB::beginTransaction();
            
            $order = Order::create($data);

            $order->contact()->create($data['contact']);

            $order->orderTaskList()->createMany($data['orderTaskList']);

            $cost = $order->art->user_work_time->where('work_time_id', $order->work_time_id)->first()->cost;

            // Add Wallet Transaction
            $walletTransaction = WalletTransaction::create([
                'user_id' => $order->member_id,
                'amount' => $cost,
                'trc_type' => 1, // Keluar
                'trc_time' => Carbon::now(),
                'trc_img' => '',
                'acc_no' => '',
                'status' => 0,
            ]);

            $order->update([
                'wallet_transaction_id' => $walletTransaction->id
            ]);

            DB::commit();

            return response()->json([ 'data' => $order, 
                                      'status' => 201]);
        }
        catch(Exception $e) {
            DB::rollBack();

            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        return $order->load([
            'member',
            'art',
            'workTime',
            'reviewOrder',
            'contact',
            'orderTaskList',
            'job',
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        $data = $request->all();

        try {
            DB::beginTransaction();
            
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('member_id', $data)) {
                $order->member_id = $data['member_id'];
            }
            if (array_key_exists('art_id', $data)) {
                $order->art_id = $data['art_id'];
            }
            if (array_key_exists('work_time_id', $data)) {
                $order->work_time_id = $data['work_time_id'];
            }
            if (array_key_exists('job_id', $data)) {
                $order->job_id = $data['job_id'];
            }
            if (array_key_exists('cost', $data)) {
                $order->cost = $data['cost'];
            }
            if (array_key_exists('start_date', $data)) {
                $order->start_date = $data['start_date'];
            }
            if (array_key_exists('end_date', $data)) {
                $order->end_date = $data['end_date'];
            }
            if (array_key_exists('remark', $data)) {
                $order->remark = $data['remark'];
            }
            if (array_key_exists('status', $data)) {
                $order->status = $data['status'];
                if ($order->status == 2 || $order->status == 4) {
                    WalletTransaction::where('id', $order->wallet_transaction_id)
                        ->update([
                            'status' => 2
                        ]);
                }
            }
            if (array_key_exists('status_member', $data)) {
                if ($order->status_member == 0 && $data['status_member'] == 1) {
                    if ($order->status_art == 1) {
                        // Update user Wallet
                        WalletTransaction::where('id', $order->wallet_transaction_id)
                            ->update([
                                'status' => 1
                            ]);
    
                        // Add ART Wallet
                        $artWalletTransaction = WalletTransaction::create([
                            'user_id' => $order->art_id,
                            'amount' => $order->cost,
                            'trc_type' => 0, // Masuk
                            'trc_time' => Carbon::now(),
                            'trc_img' => '',
                            'acc_no' => '',
                            'status' => 1,
                        ]);
    
                        $order->status = 3;
                    }
                    else {
                        throw new Exception('Tidak dapat menyelesaikan Order. ART belum melakukan konfirmasi Selesai.');
                    }
                }

                $order->status_member = $data['status_member'];
            }
            if (array_key_exists('status_art', $data)) {
                $order->status_art = $data['status_art'];
            }
            

            if (array_key_exists('contact', $data)) {
                $order->contact()->delete();
                $order->contact()->create($data['contact']);
            }

            if (array_key_exists('orderTaskList', $data)) {
                $order->orderTaskList()->delete();
                $order->orderTaskList()->createMany($data['orderTaskList']);
            }

            if (array_key_exists('reviewOrder', $data)) {
                $order->reviewOrder()->delete();
                $order->reviewOrder()->createMany($data['reviewOrder']);
            }

            $order->save();

            DB::commit();

            return response()->json([ 'data' => $order, 
                                      'status' => 200]);
        }
        catch(Exception $e) {
            DB::rollBack();
            
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function updateWithFullReturn(Request $request, Order $order)
    {
        $data = $request->all();

        try {
            DB::beginTransaction();
            
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('member_id', $data)) {
                $order->member_id = $data['member_id'];
            }
            if (array_key_exists('art_id', $data)) {
                $order->art_id = $data['art_id'];
            }
            if (array_key_exists('work_time_id', $data)) {
                $order->work_time_id = $data['work_time_id'];
            }
            if (array_key_exists('job_id', $data)) {
                $order->job_id = $data['job_id'];
            }
            if (array_key_exists('cost', $data)) {
                $order->cost = $data['cost'];
            }
            if (array_key_exists('start_date', $data)) {
                $order->start_date = $data['start_date'];
            }
            if (array_key_exists('end_date', $data)) {
                $order->end_date = $data['end_date'];
            }
            if (array_key_exists('remark', $data)) {
                $order->remark = $data['remark'];
            }
            if (array_key_exists('status', $data)) {
                $order->status = $data['status'];
            }
            if (array_key_exists('status_member', $data)) {
                $order->status_member = $data['status_member'];
            }
            if (array_key_exists('status_art', $data)) {
                $order->status_art = $data['status_art'];
            }

            if (array_key_exists('contact', $data)) {
                $order->contact()->delete();
                $order->contact()->create($data['contact']);
            }

            if (array_key_exists('orderTaskList', $data)) {
                $order->orderTaskList()->delete();
                $order->orderTaskList()->createMany($data['orderTaskList']);
            }

            if (array_key_exists('reviewOrder', $data)) {
                $order->reviewOrder()->delete();
                $order->reviewOrder()->create($data['reviewOrder']);
            }

            $order->save();

            DB::commit();

            return response()->json([ 'data' => $order->load([
                                                    'member.contact',
                                                    'art.contact',
                                                    'workTime',
                                                    'contact',
                                                    'orderTaskList',
                                                    'reviewOrder',
                                                    'job',
                                                ]), 
                                    'status' => 200]);
        }
        catch(Exception $e) {
            DB::rollBack();
            
            return response()->json([ 'message' => $e->getMessage(), 
                                    'status' => 400 ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, Order $order, $param = 'info', $text)
    {
        return $order
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }

    /**
     * Search the specified resource from storage by member.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $member
     * @return \Illuminate\Http\Response
     */
    public function getByMember(Request $request, Order $order, $member)
    {
        return $order
            ->where('member_id', $member)
            ->get()
            ->load([
                'member',
                'art',
                'workTime',
                'reviewOrder',
                'contact',
                'orderTaskList',
                'job',
            ]);
    }

    /**
     * Search the specified resource from storage by ART.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $art
     * @return \Illuminate\Http\Response
     */
    public function getByArt(Request $request, Order $order, $art)
    {
        return $order
            ->where('art_id', $art)
            ->get()
            ->load([
                'member',
                'art',
                'workTime',
                'reviewOrder',
                'contact',
                'orderTaskList',
                'job',
            ]);
    }

    /**
     * Search the specified resource from storage by ART.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $art
     * @param  Parameter  $status
     * @return \Illuminate\Http\Response
     */
    public function getByArt2(Request $request, Order $order, $art, $status)
    {
        return $order
            ->where('art_id', $art)
            ->where('status', $status)
            ->get()
            ->load([
                'member',
                'art',
                'workTime',
                'reviewOrder',
                'contact',
                'orderTaskList',
                'job',
            ]);
    }

    /**
     * Search the specified resource from storage by ART.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $status
     * @return \Illuminate\Http\Response
     */
    public function getByStatus(Request $request, Order $order, $status)
    {
        return $order
            ->where('status', $status)
            ->get()
            ->load([
                'member',
                'art',
                'workTime',
                'reviewOrder',
                'contact',
                'orderTaskList',
                'job',
            ]);
    }

    /**
     * Search the specified resource from storage by ART.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $status
     * @return \Illuminate\Http\Response
     */
    public function getByMemberStatus(Request $request, Order $order, $status)
    {
        return $order
            ->where('status_member', $status)
            ->get()
            ->load([
                'member',
                'art',
                'workTime',
                'reviewOrder',
                'contact',
                'orderTaskList',
                'job',
            ]);
    }
    
    /**
     * Search the specified resource from storage by ART.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $status
     * @return \Illuminate\Http\Response
     */
    public function getByArtStatus(Request $request, Order $order, $status)
    {
        return $order
            ->where('status_art', $status)
            ->get()
            ->load([
                'member',
                'art',
                'workTime',
                'reviewOrder',
                'contact',
                'orderTaskList',
                'job',
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function showFull(Order $order)
    {
        return $order->load([
            'member.contact',
            'art.contact',
            'workTime',
            'contact',
            'orderTaskList',
            'reviewOrder',
            'job',
        ]);
    }

    /**
     * Search the specified resource from storage by ART.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $art
     * @return \Illuminate\Http\Response
     */
    public function getReview(Request $request, Order $order, $art)
    {
        return $order
            ->whereHas('reviewOrder')
            ->where('art_id', $art)
            ->get()
            ->load([
                'member',
                'art',
                'workTime',
                'reviewOrder',
                'contact',
                'orderTaskList',
                'job',
            ]);
    }

    /**
     * Display a listing of the Order resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getOrder()
    {
        $orders = Order::with([
                'member.contact',
                'art.contact',
                'workTime',
                'contact',
                'orderTaskList',
                'reviewOrder',
                'job',
            ])
            ->paginate(10);

        return $orders;
    }

    /**
     * Display a listing of the Order resource.
     *
     * @param  Parameter  $member
     * @return \Illuminate\Http\Response
     */
    public function getOrderByMember($member)
    {
        $userObj = User::find($member);

        $orders = Order::with([
                'member.contact',
                'art.contact',
                'workTime',
                'contact',
                'orderTaskList',
                'reviewOrder',
                'job',
            ]);
        
        if ($userObj->role_id == 2) {
            $orders->where('member_id', $userObj->id);
        }
        else if ($userObj->role_id == 3) {
            $orders->where('art_id', $userObj->id);
        }

        return $orders->paginate(10);
    }

    /**
     * Display a listing of the ART resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request, Order $order)
    {
        try {
            $inputs = $request->all();
            
            $order = Order::with([
                'member.contact',
                'workTime',
                'contact',
                'orderTaskList',
                'reviewOrder',
                'job',
            ]);

            $dateNow = Carbon::now();

            foreach($inputs as $key => $input) {
                if ($key == 'job') {
                    $order = $order->has('job', $input);
                }
                else if ($key == 'work_time') {
                    $order = $order->has('workTime', $input);
                }
                else if ($key == 'start_date') {
                    $order = $order->where('start_date', Operators::GREATER_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'end_date') {
                    $order = $order->where('end_date', Operators::LESS_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'maxCost') {
                    $order = $order->where('cost', Operators::LESS_THAN_EQUAL, $input);
                }
                else if ($key == 'city') {
                    $order = $order->where('contact.city', $input);
                }
                else if ($key == 'name') {
                    $order = $order->whereHas('art', function($query) use ($input) {
                        $query->where('name', Operators::LIKE, '%'.$input.'%');
                    });
                }
                // else {
                //     $order = $order->where($key, Operators::LIKE, '%'.$input.'%');
                // }
            }
            
            return $order->orderBy('start_date', 'DESC')->paginate(10);
        }
        catch (Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display a listing of the User resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @param  Parameter  $user
     * @return \Illuminate\Http\Response
     */
    public function searchByUser(Request $request, Order $order, $user)
    {
        try {
            $inputs = $request->all();
            
            $userObj = User::find($user);
        
            $order = Order::with([
                'member.contact',
                'art.contact',
                'workTime',
                'contact',
                'orderTaskList',
                'reviewOrder',
                'job',
            ]);

            if ($userObj->role_id == 2) {
                $order->where('member_id', $user);
            }
            else if ($userObj->role_id == 3) {
                $order->where('art_id', $user);
            }

            $dateNow = Carbon::now();

            foreach($inputs as $key => $input) {
                if ($key == 'job') {
                    $order = $order->has('job', $input);
                }
                else if ($key == 'work_time') {
                    $order = $order->has('workTime', $input);
                }
                else if ($key == 'start_date') {
                    $order = $order->where('start_date', Operators::GREATER_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'end_date') {
                    $order = $order->where('end_date', Operators::LESS_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'maxCost') {
                    $order = $order->where('cost', Operators::LESS_THAN_EQUAL, $input);
                }
                else if ($key == 'city') {
                    $order = $order->where('contact.city', $input);
                }
                else if ($key == 'status') {
                    $temp = explode(',', $input);
                    $order = $order->whereIn('status', $temp);
                }
                else if ($key == 'name') {
                    $order = $order->whereHas('art', function($query) use ($input) {
                        $query->where('name', Operators::LIKE, '%'.$input.'%');
                    });
                }
                // else {
                //     $order = $order->where($key, Operators::LIKE, '%'.$input.'%');
                // }
            }
            
            return $order->orderBy('start_date', 'DESC')->paginate(10);
        }
        catch (Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }
}
