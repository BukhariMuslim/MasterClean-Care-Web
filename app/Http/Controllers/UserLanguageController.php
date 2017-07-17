<?php

namespace App\Http\Controllers;

use App\Models\UserLanguage;
use Illuminate\Http\Request;
use App\Helper\Operators;
use Exception;

class UserLanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserLanguage::all();
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

            $userLanguage = UserLanguage::create($data);

            return response()->json([ 'data' => $userLanguage, 
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
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function show(UserLanguage $userLanguage)
    {
        return $userLanguage;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function edit(UserLanguage $userLanguage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserLanguage $userLanguage)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('user_id', $data)) {
                $userLanguage->user_id = $data['user_id'];
            }
            if (array_key_exists('language_id', $data)) {
                $userLanguage->language_id = $data['language_id'];
            }

            $userLanguage->save();

            return response()->json([ 'data' => $userLanguage, 
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
     * @param  \App\Models\UserLanguage  $userLanguage
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserLanguage $userLanguage)
    {
        $userLanguage->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }
}
