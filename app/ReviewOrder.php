<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReviewOrder extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_id',
        'rate',
        'remark',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the order record associated with the additionalInfo.
     */
    public function order()
    {
        return $this->belongsTo('App\Order');
    }
}
