<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskList extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'job_id',
        'task',
        'point',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the job record associated with the additionalInfo.
     */
    public function jobId()
    {
        return $this->belongsTo(Job::class);
    }

    /**
     * Get the job List record associated with the additionalInfo.
     */
    public function jobIdList()
    {
        return Job::all();
    }
}
