<?php

namespace App\Http\Controllers;

use App\UserDocument;
use Illuminate\Http\Request;
use App\Helper\Operator;
use Exception;

class UserDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserDocument::all();
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

            $userDocument = UserDocument::create($data);

            return response()->json([ 'data' => $userDocument, 
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
     * @param  \App\UserDocument  $userDocument
     * @return \Illuminate\Http\Response
     */
    public function show(UserDocument $userDocument)
    {
        return $userDocument;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserDocument  $userDocument
     * @return \Illuminate\Http\Response
     */
    public function edit(UserDocument $userDocument)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserDocument  $userDocument
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserDocument $userDocument)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('user_id', $data)) {
                $userDocument->user_id = $data['user_id'];
            }
            if (array_key_exists('document_name', $data)) {
                $userDocument->document_name = $data['document_name'];
            }
            if (array_key_exists('document_path', $data)) {
                $userDocument->document_path = $data['document_path'];
            }
            if (array_key_exists('document_type', $data)) {
                $userDocument->document_type = $data['document_type'];
            }
            if (array_key_exists('experience', $data)) {
                $userDocument->experience = $data['experience'];
            }

            $userDocument->save();

            return response()->json([ 'data' => $userDocument, 
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
     * @param  \App\UserDocument  $userDocument
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserDocument $userDocument)
    {
        $userDocument->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }
}
