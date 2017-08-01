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
    public function orderId()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the order List record associated with the additionalInfo.
     */
    public function orderIdList()
    {
        return Order::all();
    }

    /**
     * Get the order_task_list record associated with the additionalInfo.
     */
    public function order_task_list()
    {
        return $this->hasMany(OrderTaskList::class);
    }
}
