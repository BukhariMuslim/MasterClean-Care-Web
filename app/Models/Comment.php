<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'article_id',
        'user_id',
        'comment',
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
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the article record associated with the additionalInfo.
     */
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
