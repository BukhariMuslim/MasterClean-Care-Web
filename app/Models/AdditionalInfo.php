<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdditionalInfo extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'info',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the userAdditionalInfo record associated with the additionalInfo.
     */
    public function userAdditionalInfo()
    {
        return $this->hasMany('App\UserAdditionalInfo');
    }
}
