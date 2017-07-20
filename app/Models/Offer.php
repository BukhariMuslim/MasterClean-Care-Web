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
        'cost',
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
        return $this->belongsTo(User::class, 'member_id');
    }

    /**
     * Get the work_time record associated with the additionalInfo.
     */
    public function work_time()
    {
        return $this->belongsTo(WorkTime::class);
    }

    /**
     * Get the offer_task_list record associated with the additionalInfo.
     */
    public function offer_task_list()
    {
        return $this->hasMany(OfferTaskList::class);
    }

    /**
     * Get the offer_art record associated with the additionalInfo.
     */
    public function offer_art()
    {
        return $this->hasMany(OfferArt::class);
    }

    /**
     * Get the contact record associated with the user.
     */
    public function contact()
    {
        return $this->hasMany(OfferContact::class);
    }
}
