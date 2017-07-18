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
        return $this->belongsTo(Places::class, 'province');
    }

    /**
     * Get the city record associated with the user.
     */
    public function city()
    {
        return $this->belongsTo(Places::class, 'city');
    }

    /**
     * Get the user_wallet record associated with the user.
     */
    public function user_wallet()
    {
        return $this->hasMany(UserWallet::class);
    }

    /**
     * Get the user_language record associated with the user.
     */
    public function user_language()
    {
        return $this->hasMany(UserLanguage::class);
    }

    /**
     * Get the language record associated with the user.
     */
    public function language()
    {
        return $this->hasManyThrough(Language::class, UserLanguage::class);
    }

    /**
     * Get the user_job record associated with the user.
     */
    public function user_job()
    {
        return $this->hasMany(UserJob::class);
    }

    /**
     * Get the job record associated with the user.
     */
    public function job()
    {
        return $this->hasManyThrough('App\Models\Job', 'App\Models\UserJob');
    }

    /**
     * Get the user_work_Time record associated with the user.
     */
    public function user_work_Time()
    {
        return $this->hasMany('App\Models\UserWorkTime');
    }

    /**
     * Get the work_Time record associated with the user.
     */
    public function work_Time()
    {
        return $this->hasManyThrough('App\Models\WorkTime', 'App\Models\UserWorkTime');
    }

    /**
     * Get the user_document record associated with the user.
     */
    public function user_document()
    {
        return $this->hasMany('App\Models\UserDocument');
    }

    /**
     * Get the user_additional_info record associated with the user.
     */
    public function user_additional_info()
    {
        return $this->hasMany('App\Models\UserAdditionalInfo');
    }

    /**
     * Get the additional_info record associated with the user.
     */
    public function additional_info()
    {
        return $this->hasManyThrough('App\Models\AdditionalInfo', 'App\Models\UserAdditionalInfo');
    }

    /**
     * Get the wallet_transaction record associated with the user.
     */
    public function wallet_transaction()
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
        return $this->hasMany('App\Models\Order', 'member_id');
    }

    /**
     * Get the order_rate record associated with the user.
     */
    public function order_rate()
    {
        return $this->hasManyThrough('App\Models\ReviewOrder', 'App\Models\Order', 'member_id');
    }

    /**
     * Get the offer record associated with the user.
     */
    public function offer()
    {
        return $this->hasMany(Offer::class);
    }

    /**
     * Get the offer_art record associated with the user.
     */
    public function offer_art()
    {
        return $this->hasMany(OfferArt::class);
    }

    /**
     * Get the emergency_call record associated with the user.
     */
    public function emergency_call()
    {
        return $this->hasMany('App\Models\EmergencyCall');
    }

    /**
     * Get the message record associated with the user.
     */
    public function message()
    {
        return $this->hasMany(Message::class);
    }
}
