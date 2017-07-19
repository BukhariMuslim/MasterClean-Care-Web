<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'language',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];
    
    /**
     * Get the user_language record associated with the language.
     */
    public function user_language()
    {
        return $this->hasMany(UserLanguage::class);
    }
}
