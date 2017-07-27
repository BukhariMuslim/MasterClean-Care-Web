<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Helper\Traits\UserTrait;

class Article extends Model
{
    use UserTrait;
    
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
     * Get the comment record associated with the additionalInfo.
     */
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
}
