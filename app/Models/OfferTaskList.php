<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OfferTaskList extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'offer_id',
        'task_list_id',
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
}
