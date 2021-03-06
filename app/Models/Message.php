<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sender_id',
        'receiver_id',
        'subject',
        'message',
        'status_member',
        'status_art',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the sender record associated with the additionalInfo.
     */
    public function senderId()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    /**
     * Get the receiver record associated with the additionalInfo.
     */
    public function receiverId()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }
}
