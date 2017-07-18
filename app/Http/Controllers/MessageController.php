<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use App\Helper\Operators;
use Exception;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Message::all();
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

            $message = Message::create($data);

            return response()->json([ 'data' => $message, 
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
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        return $message;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        $data = $request->all();

        try {
            if (array_key_exists('data', $data)) {
                $data = $data['data'];
            }
            if (array_key_exists('sender_id', $data)) {
                $message->sender_id = $data['sender_id'];
            }
            if (array_key_exists('receiver_id', $data)) {
                $message->receiver_id = $data['receiver_id'];
            }
            if (array_key_exists('subject', $data)) {
                $message->subject = $data['subject'];
            }
            if (array_key_exists('message', $data)) {
                $message->message = $data['message'];
            }
            if (array_key_exists('status', $data)) {
                $message->status = $data['status'];
            }

            $message->save();

            return response()->json([ 'data' => $message, 
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
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        $message->delete();

        return response()->json([ 'message' => 'Deleted', 
                                  'status' => 200]);
    }

    /**
     * Search the specified resource from storage by parameter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @param  Parameter  $param
     * @param  Text  $text
     * @return \Illuminate\Http\Response
     */
    public function searchByParam(Request $request, Message $message, $param = 'info', $text)
    {
        return $message
            ->where($param,
                Operators::LIKE,
                '%'.$text.'%')
            ->get();
    }

    /**
     * Search the specified resource from storage by user ID.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @param  Text  $user
     * @return \Illuminate\Http\Response
     */
    public function searchByUserId(Request $request, Message $message, $user)
    {
        return $message->where('sender_id', $user)
            ->orWhere('receiver_id', $user)->get();
    }
    
    
    /**
     * Search the specified resource from storage by sender & receiver ID.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @param  Text  $sender
     * @param  Text  $receiver
     * @return \Illuminate\Http\Response
     */
    public function searchBySenderReceiverId(Request $request, Message $message, $sender, $receiver)
    {
        return $message->where('sender_id', $sender)
            ->where('receiver_id', $receiver)->get();
    }
}
