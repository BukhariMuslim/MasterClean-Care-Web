<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'reporter_id',
        'remark',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user record associated with the userJob.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
