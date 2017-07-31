<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'job',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the userJob record associated with the job.
     */
    public function userJob()
    {
        return $this->hasMany(UserJob::class);
    }
    
    /**
     * Get the order record associated with the job.
     */
    public function order()
    {
        return $this->hasMany(Order::class);
    }
    
    /**
     * Get the offer record associated with the job.
     */
    public function offer()
    {
        return $this->hasMany(Offer::class);
    }
}
