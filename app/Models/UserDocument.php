<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Helper\Traits\UserTrait;

class UserDocument extends Model
{
    use UserTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'document_name',
        'document_path',
        'document_type',
        'experience',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the user record associated with the userDocument.
     */
}
