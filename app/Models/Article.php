<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'title',
        'tag',
        'published_date',
        'content',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user record associated with the additionalInfo.
     */
    public function userId()
    {
        return $this->belongsTo(User::class);
    }

    public function userIdList(){
        return User::where('status', 1)->orderBy('created_at')->get();
    }
}
