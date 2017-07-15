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
     * Get the userWorkTime record associated with the workTime.
     */
    public function userWorkTime()
    {
        return $this->hasMany('App\Models\UserWorkTime');
    }

    /**
     * Get the order record associated with the user.
     */
    public function order()
    {
        return $this->hasMany('App\Models\Order');
    }

    /**
     * Get the request record associated with the user.
     */
    public function request()
    {
        return $this->hasMany('App\Request');
    }
}
