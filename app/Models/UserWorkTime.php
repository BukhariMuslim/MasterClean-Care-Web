<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserWorkTime extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'work_time_id',
        'cost',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user record associated with the userWorkTime.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the workTime record associated with the userWorkTime.
     */
    public function workTime()
    {
        return $this->belongsTo('App\WorkTime');
    }
}
