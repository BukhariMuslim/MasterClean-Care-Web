<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Helpers\Traits\TimeStampTrait;

class Critism extends Model
{
    use TimeStampTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'content',
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
