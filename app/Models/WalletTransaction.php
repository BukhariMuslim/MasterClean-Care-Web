<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Helpers\Traits\UserTrait;

class WalletTransaction extends Model
{
    use UserTrait;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'amount',
        'trc_type',
        'trc_time',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the wallet record associated with the walletTransaction.
     */
    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }
}
