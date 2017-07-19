<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'parent',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user_contact record associated with the places.
     */
    public function user_contact()
    {
        return $this->hasMany(UserContact::class);
    }

    /**
     * Get the offer_contact record associated with the places.
     */
    public function offer_contact()
    {
        return $this->hasMany(OrderContact::class);
    }

    /**
     * Get the order_contact record associated with the places.
     */
    public function order_contact()
    {
        return $this->hasMany(OrderContact::class);
    }
}
