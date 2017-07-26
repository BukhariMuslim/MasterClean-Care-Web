<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderContact extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_id',
        'phone',
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
     * Get the order record associated with the places.
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the city record associated with the order.
     */
    public function city()
    {
        return $this->belongsTo(Places::class, 'city');
    }
}
