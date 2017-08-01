<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'amt',
        'price',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the userWallet record associated with the wallet.
     */
    public function userWallet()
    {
        return $this->hasMany(UserWallet::class);
    }

    /**
     * Get the wallet_transaction record associated with the wallet.
     */
    public function wallet_transaction()
    {
        return $this->hasMany(WalletTransaction::class);
    }
}
