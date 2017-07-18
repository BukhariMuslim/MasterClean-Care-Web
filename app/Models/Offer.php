<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'member_id',
        'work_time_id',
        'start_date',
        'end_date',
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
     * Get the offerTaskList record associated with the additionalInfo.
     */
    public function offerTaskList()
    {
        return $this->hasMany('App\Models\OfferTaskList');
    }

    /**
     * Get the contact record associated with the user.
     */
    public function contact()
    {
        return $this->hasMany(OfferContact::class);
    }
}
