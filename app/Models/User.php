<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email', 
        'password', 
        'gender', 
        'born_place', 
        'born_date', 
        'phone',
        'province',
        'city',
        'address', 
        'location',
        'religion',
        'race',
        'user_type',
        'profile_img_name',
        'profile_img_path',
        'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the province record associated with the user.
     */
    public function province()
    {
        return $this->belongsTo('App\Models\Places', 'province');
    }

    /**
     * Get the city record associated with the user.
     */
    public function city()
    {
        return $this->belongsTo('App\Models\Places', 'city');
    }

    /**
     * Get the userWallet record associated with the user.
     */
    public function userWallet()
    {
        return $this->hasMany('App\Models\UserWallet');
    }

    /**
     * Get the userLanguage record associated with the user.
     */
    public function userLanguage()
    {
        return $this->hasMany('App\Models\UserLanguage');
    }

    /**
     * Get the language record associated with the user.
     */
    public function language()
    {
        return $this->hasManyThrough('App\Models\Language', 'App\Models\UserLanguage');
    }

    /**
     * Get the userJob record associated with the user.
     */
    public function userJob()
    {
        return $this->hasMany('App\Models\UserJob');
    }

    /**
     * Get the job record associated with the user.
     */
    public function job()
    {
        return $this->hasManyThrough('App\Models\Job', 'App\Models\UserJob');
    }

    /**
     * Get the userWorkTime record associated with the user.
     */
    public function userWorkTime()
    {
        return $this->hasMany('App\Models\UserWorkTime');
    }

    /**
     * Get the workTime record associated with the user.
     */
    public function workTime()
    {
        return $this->hasManyThrough('App\Models\WorkTime', 'App\Models\UserWorkTime');
    }

    /**
     * Get the userDocument record associated with the user.
     */
    public function userDocument()
    {
        return $this->hasMany('App\Models\UserDocument');
    }

    /**
     * Get the userAdditionalInfo record associated with the user.
     */
    public function userAdditionalInfo()
    {
        return $this->hasMany('App\Models\UserAdditionalInfo');
    }

    /**
     * Get the additionalInfo record associated with the user.
     */
    public function additionalInfo()
    {
        return $this->hasManyThrough('App\Models\AdditionalInfo', 'App\Models\UserAdditionalInfo');
    }

    /**
     * Get the walletTransaction record associated with the user.
     */
    public function walletTransaction()
    {
        return $this->hasMany('App\Models\WalletTransaction');
    }

    /**
     * Get the wallet record associated with the user.
     */
    public function wallet()
    {
        return $this->hasManyThrough('App\Models\Wallet', 'App\Models\WalletTransaction');
    }

    /**
     * Get the article record associated with the user.
     */
    public function article()
    {
        return $this->hasMany('App\Models\Article');
    }

    /**
     * Get the comment record associated with the user.
     */
    public function comment()
    {
        return $this->hasMany('App\Models\Comment');
    }

    /**
     * Get the order record associated with the user.
     */
    public function order()
    {
        return $this->hasMany('App\Models\Order');
    }

    /**
     * Get the offer record associated with the user.
     */
    public function offer()
    {
        return $this->hasMany('App\Offer');
    }

    /**
     * Get the offerArt record associated with the user.
     */
    public function offerArt()
    {
        return $this->hasMany('App\OfferArt');
    }

    /**
     * Get the emergencyCall record associated with the user.
     */
    public function emergencyCall()
    {
        return $this->hasMany('App\Models\EmergencyCall');
    }

    /**
     * Get the message record associated with the user.
     */
    public function message()
    {
        return $this->hasMany('App\Models\Message');
    }
}
