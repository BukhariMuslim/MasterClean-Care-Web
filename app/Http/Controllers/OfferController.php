<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use App\Models\User;
use Illuminate\Http\Request;
use App\Helpers\Operators;
use Carbon\Carbon;
use Exception;
use DB;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Offer::with([
            'member',
            'workTime',
            'contact',
            'offer_art',
            'offerTaskList',
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
            
            $offer = Offer::create($data);

            $offer->contact()->create($data['contact']);

            $offer->offerTaskList()->createMany($data['offerTaskList']);

            DB::commit();

            return response()->json([ 'data' => $offer->load([
                                                'member',
                                                'workTime',
                                                'contact',
                                                'offer_art',
                                                'offerTaskList',
                                            ]), 
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
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function show(Offer $offer)
    {
        return $offer->load([
            'member',
            'workTime',
            'contact',
            'offer_art',
            'offerTaskList',
            'job',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function showFull(Offer $offer)
    {
        return $offer->load([
            'member.contact',
            'workTime',
            'contact',
            'offer_art.art',
            'offerTaskList',
            'job',
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function edit(Offer $offer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Offer $offer)
    {
        $data = $request->all();

        try {
            DB::beginTransaction();

            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('member_id', $data)) {
                $offer->member_id = $data['member_id'];
            }
            if (array_key_exists('work_time_id', $data)) {
                $offer->work_time_id = $data['work_time_id'];
            }
            if (array_key_exists('job_id', $data)) {
                $offer->job_id = $data['job_id'];
            }
            if (array_key_exists('cost', $data)) {
                $offer->cost = $data['cost'];
            }
            if (array_key_exists('start_date', $data)) {
                $offer->start_date = $data['start_date'];
            }
            if (array_key_exists('end_date', $data)) {
                $offer->end_date = $data['end_date'];
            }
            if (array_key_exists('remark', $data)) {
                $offer->remark = $data['remark'];
            }
            if (array_key_exists('status', $data)) {
                $offer->status = $data['status'];
            }

            $offer->save();

            if (array_key_exists('contact', $data)) {
                $offer->contact()->delete();
                $offer->contact()->create($data['contact']);
            }
            
            if (array_key_exists('offerTaskList', $data)) {
                $offer->offerTaskList()->delete();
                $offer->offerTaskList()->createMany($data['offerTaskList']);
            }

            DB::commit();

            return response()->json([ 'data' => $offer->load([
                                                    'member',
                                                    'workTime',
                                                    'contact',
                                                    'offer_art',
                                                    'offerTaskList',
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
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Offer $offer)
    {
        $offer->delete();

        return response()->json([ 'message' => 'Deleted Success', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, Offer $offer, $param = 'info', $text)
    {
        return $offer
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }

    /**
     * Search the specified resource from storage by member.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @param  Parameter  $member
     * @return \Illuminate\Http\Response
     */
    public function getByMember(Request $request, Offer $offer, $member)
    {
        return $offer
            ->where('member_id', $member)
            ->get()
            ->load([
                'member',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ]);
    }

    /**
     * Search the specified resource from storage by member.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @param  Parameter  $status
     * @return \Illuminate\Http\Response
     */
    public function getByStatus(Request $request, Offer $offer, $status)
    {
        return $offer
            ->where('status', $status)
            ->get()
            ->load([
                'member',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ]);
    }

    /**
     * Display a listing of the Offer resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getOffer()
    {
        $offers = Offer::with([
                'member.contact',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ])
            ->paginate(10);

        return $offers;
    }

    /**
     * Display a listing of the Offer resource.
     *
     * @param  Parameter  $member
     * @return \Illuminate\Http\Response
     */
    public function getOfferByMember($member)
    {
        $offers = Offer::with([
                'member.contact',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ])
            ->where('member_id', $member)
            ->paginate(10);

        return $offers;
    }

    /**
     * Display a listing of the ART resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request, Offer $offer)
    {
        try {
            $inputs = $request->all();
            
            $offer = Offer::with([
                'member.contact',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ])
            ->sortByDesc('start_date');

            $dateNow = Carbon::now();

            foreach($inputs as $key => $input) {
                if ($key == 'job') {
                    $offer = $offer->has('job', $input);
                }
                else if ($key == 'work_time') {
                    $offer = $offer->has('workTime', $input);
                }
                else if ($key == 'start_date') {
                    $offer = $offer->where('start_date', Operators::GREATER_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'end_date') {
                    $offer = $offer->where('end_date', Operators::LESS_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'maxCost') {
                    $offer = $offer->where('cost', Operators::LESS_THAN_EQUAL, $input);
                }
                else if ($key == 'city') {
                    $offer = $offer->where('contact.city', $input);
                }
                else if ($key == 'status') {
                    $offer = $offer->where('status', $input);
                }
                else if ($key == 'name') {
                    $offer = $offer->whereHas('member', function($query) use ($input) {
                        $query->where('name', Operators::LIKE, '%'.$input.'%');
                    });
                }
                // else {
                //     $offer = $offer->where($key, Operators::LIKE, '%'.$input.'%');
                // }
            }
            
            return $offer->paginate(10);
        }
        catch (Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }

    /**
     * Display a listing of the ART resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Offer  $offer
     * @param  Parameter  $user
     * @return \Illuminate\Http\Response
     */
    public function searchByUser(Request $request, Offer $offer, $user)
    {
        try {
            $inputs = $request->all();
            
            $userObj = User::find($user);
        
            $offer = Offer::with([
                'member.contact',
                'workTime',
                'contact',
                'offer_art',
                'offerTaskList',
                'job',
            ])
            ->sortByDesc('start_date');

            if ($userObj->role_id == 2) {
                $offer->where('member_id', $user);
            }
            else if ($userObj->role_id == 3) {
                $offer->whereHas('offer_art', function($query) use ($user) {
                    $query->where('art_id', $user);
                });
            }

            $dateNow = Carbon::now();

            foreach($inputs as $key => $input) {
                if ($key == 'job') {
                    $offer = $offer->has('job', $input);
                }
                else if ($key == 'work_time') {
                    $offer = $offer->has('workTime', $input);
                }
                else if ($key == 'start_date') {
                    $offer = $offer->where('start_date', Operators::GREATER_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'end_date') {
                    $offer = $offer->where('end_date', Operators::LESS_THAN_EQUAL, new Carbon($input));
                }
                else if ($key == 'maxCost') {
                    $offer = $offer->where('cost', Operators::LESS_THAN_EQUAL, $input);
                }
                else if ($key == 'city') {
                    $offer = $offer->where('contact.city', $input);
                }
                else if ($key == 'status') {
                    $offer = $offer->where('status', $input);
                }
                else if ($key == 'name') {
                    $offer = $offer->whereHas('member', function($query) use ($input) {
                        $query->where('name', Operators::LIKE, '%'.$input.'%');
                    });
                }
                // else {
                //     $offer = $offer->where($key, Operators::LIKE, '%'.$input.'%');
                // }
            }
            
            return $offer->paginate(10);
        }
        catch (Exception $e) {
            return response()->json([ 'message' => $e->getMessage(), 
                                      'status' => 400 ]);
        }
    }
}
