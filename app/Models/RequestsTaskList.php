<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RequestsTaskList extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'requests_id',
        'task',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the requests record associated with the additionalInfo.
     */
    public function requests()
    {
        return $this->belongsTo('App\Requests');
    }
}
