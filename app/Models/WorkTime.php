<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkTime extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'work_time',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user_work_time record associated with the workTime.
     */
    public function user_work_time()
    {
        return $this->hasMany(UserWorkTime::class);
    }

    /**
     * Get the order record associated with the user.
     */
    public function order()
    {
        return $this->hasMany(Order::class);
    }

    /**
     * Get the request record associated with the user.
     */
    public function request()
    {
        return $this->hasMany('App\Request');
    }
}
