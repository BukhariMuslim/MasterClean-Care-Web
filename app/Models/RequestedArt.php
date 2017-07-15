<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RequestedArt extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'request_id',
        'art_id',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the request record associated with the additionalInfo.
     */
    public function request()
    {
        return $this->belongsTo('App\Request');
    }

    /**
     * Get the art record associated with the additionalInfo.
     */
    public function art()
    {
        return $this->belongsTo('App\User', 'art_id');
    }
}
