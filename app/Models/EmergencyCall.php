<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmergencyCall extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'init_time',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user record associated with the additionalInfo.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
