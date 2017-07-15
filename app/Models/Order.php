<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'member_id',
        'art_id',
        'work_time_id',
        'start_date',
        'end_date',
        'province',
        'city',
        'address',
        'location',
        'remark',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the member record associated with the additionalInfo.
     */
    public function member()
    {
        return $this->belongsTo('App\Models\User', 'member_id');
    }

    /**
     * Get the art record associated with the additionalInfo.
     */
    public function art()
    {
        return $this->belongsTo('App\Models\User', 'art_id');
    }

    /**
     * Get the work_time record associated with the additionalInfo.
     */
    public function work_time()
    {
        return $this->belongsTo('App\Models\WorkTime');
    }

    /**
     * Get the province record associated with the additionalInfo.
     */
    public function province()
    {
        return $this->belongsTo('App\Models\Place', 'province');
    }

    /**
     * Get the city record associated with the additionalInfo.
     */
    public function city()
    {
        return $this->belongsTo('App\Models\Place', 'city');
    }

    /**
     * Get the reviewOrder record associated with the additionalInfo.
     */
    public function reviewOrder()
    {
        return $this->hasMany('App\Models\ReviewOrder');
    }
}
