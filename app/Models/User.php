<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use TCG\Voyager\Models\Role;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'role_id', 
        'name', 
        'email', 
        'avatar', 
        'password', 
        'gender', 
        'born_place', 
        'born_date', 
        'religion',
        'race',
        'user_type',
        'description',
        'status',
        'activation',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $appends = [
        'rate',
        'user_wallet',
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
     * Get the contact record associated with the user.
     */
    public function contact()
    {
        return $this->hasOne(UserContact::class);
    }

    /**
     * Get the user_wallet record associated with the user.
     */
    public function getUserWalletAttribute()
    {
        $positive = $this->wallet_transaction()->where('trc_type', 0)->where('status', 1)->sum('amount');
        $negative = $this->wallet_transaction()->where('trc_type', 1)->where('status', 1)->sum('amount');


        return [
            'user_id' => $this->id,
            'amt' => $positive - $negative,
        ];
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
        return $this->hasManyThrough(Job::class, UserJob::class);
    }

    /**
     * Get the user_work_Time record associated with the user.
     */
    public function user_work_Time()
    {
        return $this->hasMany(UserWorkTime::class);
    }

    /**
     * Get the work_Time record associated with the user.
     */
    public function work_Time()
    {
        return $this->hasManyThrough(WorkTime::class, UserWorkTime::class);
    }

    /**
     * Get the user_document record associated with the user.
     */
    public function user_document()
    {
        return $this->hasMany(UserDocument::class);
    }

    /**
     * Get the user_additional_info record associated with the user.
     */
    public function user_additional_info()
    {
        return $this->hasMany(UserAdditionalInfo::class);
    }

    /**
     * Get the additional_info record associated with the user.
     */
    public function additional_info()
    {
        return $this->hasManyThrough(AdditionalInfo::class, UserAdditionalInfo::class);
    }

    /**
     * Get the wallet_transaction record associated with the user.
     */
    public function wallet_transaction()
    {
        return $this->hasMany(WalletTransaction::class);
    }

    // /**
    //  * Get the wallet record associated with the user.
    //  */
    // public function wallet()
    // {
    //     return $this->hasManyThrough(Wallet::class, WalletTransaction::class);
    // }

    /**
     * Get the article record associated with the user.
     */
    public function article()
    {
        return $this->hasMany(Article::class);
    }

    /**
     * Get the comment record associated with the user.
     */
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Get the order record associated with the user.
     */
    public function order()
    {
        return $this->hasMany(Order::class, 'member_id');
    }

    /**
     * Get the order_count record associated with the user.
     */
    public function order_count()
    {
        return $this->hasManyThrough(ReviewOrder::class, Order::class, 'member_id');
    }

    /**
     * Get the order_rate record associated with the user.
     */
    public function order_rate()
    {
        return $this->hasManyThrough(ReviewOrder::class, Order::class, 'art_id');
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
        return $this->hasMany(EmergencyCall::class);
    }

    /**
     * Get the message record associated with the user.
     */
    public function message()
    {
        return $this->hasMany(Message::class);
    }

    /**
     * Get the order rate associated with the user.
     */
    public function getRateAttribute()
    {
        return $this->order_rate()->avg('rate');
    }

    /**
     * Get the order rate associated with the user.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
