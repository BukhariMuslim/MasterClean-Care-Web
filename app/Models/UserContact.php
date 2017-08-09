<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserContact extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'phone',
        'emergency_numb',
        'city',
        'address',
        'location',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user record associated with the places.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the city record associated with the user.
     */
    public function city()
    {
        return $this->belongsTo(Place::class, 'city');
    }
}
