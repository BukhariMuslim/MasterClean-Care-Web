<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OfferContact extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'offer_id',
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
     * Get the offer record associated with the places.
     */
    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }

    /**
     * Get the city record associated with the offer.
     */
    public function city()
    {
        return $this->belongsTo(Places::class, 'city');
    }
}
