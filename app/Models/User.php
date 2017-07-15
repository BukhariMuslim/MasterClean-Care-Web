<?php

namespace App;

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
        return $this->belongsTo('App\Places', 'province');
    }

    /**
     * Get the city record associated with the user.
     */
    public function city()
    {
        return $this->belongsTo('App\Places', 'city');
    }

    /**
     * Get the userWallet record associated with the user.
     */
    public function userWallet()
    {
        return $this->hasMany('App\UserWallet');
    }

    /**
     * Get the userLanguage record associated with the user.
     */
    public function userLanguage()
    {
        return $this->hasMany('App\UserLanguage');
    }

    /**
     * Get the language record associated with the user.
     */
    public function language()
    {
        return $this->hasManyThrough('App\Language', 'App\UserLanguage');
    }

    /**
     * Get the userJob record associated with the user.
     */
    public function userJob()
    {
        return $this->hasMany('App\UserJob');
    }

    /**
     * Get the job record associated with the user.
     */
    public function job()
    {
        return $this->hasManyThrough('App\Job', 'App\UserJob');
    }

    /**
     * Get the userWorkTime record associated with the user.
     */
    public function userWorkTime()
    {
        return $this->hasMany('App\UserWorkTime');
    }

    /**
     * Get the workTime record associated with the user.
     */
    public function workTime()
    {
        return $this->hasManyThrough('App\WorkTime', 'App\UserWorkTime');
    }

    /**
     * Get the userDocument record associated with the user.
     */
    public function userDocument()
    {
        return $this->hasMany('App\UserDocument');
    }

    /**
     * Get the userAdditionalInfo record associated with the user.
     */
    public function userAdditionalInfo()
    {
        return $this->hasMany('App\UserAdditionalInfo');
    }

    /**
     * Get the additionalInfo record associated with the user.
     */
    public function additionalInfo()
    {
        return $this->hasManyThrough('App\AdditionalInfo', 'App\UserAdditionalInfo');
    }

    /**
     * Get the walletTransaction record associated with the user.
     */
    public function walletTransaction()
    {
        return $this->hasMany('App\WalletTransaction');
    }

    /**
     * Get the wallet record associated with the user.
     */
    public function wallet()
    {
        return $this->hasManyThrough('App\Wallet', 'App\WalletTransaction');
    }

    /**
     * Get the article record associated with the user.
     */
    public function article()
    {
        return $this->hasMany('App\Article');
    }

    /**
     * Get the comment record associated with the user.
     */
    public function comment()
    {
        return $this->hasMany('App\Comment');
    }

    /**
     * Get the order record associated with the user.
     */
    public function order()
    {
        return $this->hasMany('App\Order');
    }

    /**
     * Get the request record associated with the user.
     */
    public function request()
    {
        return $this->hasMany('App\Request');
    }

    /**
     * Get the requestedArt record associated with the user.
     */
    public function requestedArt()
    {
        return $this->hasMany('App\RequestedArt');
    }

    /**
     * Get the emergencyCall record associated with the user.
     */
    public function emergencyCall()
    {
        return $this->hasMany('App\EmergencyCall');
    }

    /**
     * Get the message record associated with the user.
     */
    public function message()
    {
        return $this->hasMany('App\Message');
    }
}
