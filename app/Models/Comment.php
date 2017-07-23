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
     * Get the userId record associated with the additionalInfo.
     */
    public function userId()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the userId List record associated with the additionalInfo.
     */
    public function userIdList()
    {
        return User::where('status', 1)->orderBy('created_at')->get();
    }

    /**
     * Get the articleId record associated with the additionalInfo.
     */
    public function articleId()
    {
        return $this->belongsTo(Article::class, 'article_id');
    }

    /**
     * Get the articleId List record associated with the additionalInfo.
     */
    public function articleIdList()
    {
        return Article::all()->orderBy('created_at')->get();
    }
}
