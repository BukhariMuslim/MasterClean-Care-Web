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
        'cost',
        'start_date',
        'end_date',
        'remark',
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
     * Get the member record associated with the additionalInfo.
     */
    public function member()
    {
        return $this->belongsTo(User::class, 'member_id');
    }

    /**
     * Get the member record associated with the additionalInfo.
     */
    public function memberList()
    {
        return User::where('status', 1)->where('role_id', 2)->get();
    }

    /**
     * Get the art record associated with the additionalInfo.
     */
    public function art()
    {
        return $this->belongsTo(User::class, 'art_id');
    }

    /**
     * Get the member record associated with the additionalInfo.
     */
    public function artList()
    {
        return User::where('status', 1)->where('role_id', 3)->get();
    }

    /**
     * Get the work_time record associated with the additionalInfo.
     */
    public function workTime()
    {
        return $this->belongsTo(WorkTime::class);
    }

    /**
     * Get the work_time record associated with the additionalInfo.
     */
    public function workTimeList()
    {
        return WorkTime::all();
    }

    /**
     * Get the review_order record associated with the additionalInfo.
     */
    public function reviewOrder()
    {
        return $this->hasOne(ReviewOrder::class);
    }

    /**
     * Get the contact record associated with the user.
     */
    public function contact()
    {
        return $this->hasOne(OrderContact::class);
    }

    /**
     * Get the orderTaskList record associated with the additionalInfo.
     */
    public function orderTaskList()
    {
        return $this->hasMany(OrderTaskList::class);
    }
}
