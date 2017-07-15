<?php

namespace App\Models;

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
        return $this->belongsTo('App\Models\Order');
    }

    /**
     * Get the orderTaskList record associated with the additionalInfo.
     */
    public function orderTaskList()
    {
        return $this->hasMany('App\Models\OrderTaskList');
    }
}
