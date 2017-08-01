<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OfferArt extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'offer_id',
        'art_id',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the offer record associated with the additionalInfo.
     */
    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }

    /**
     * Get the art record associated with the additionalInfo.
     */
    public function art()
    {
        return $this->belongsTo(User::class, 'art_id');
    }
}
