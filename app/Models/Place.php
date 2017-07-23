<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'parent',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [ ];

    /**
     * Get the parent record associated with the places.
     */
    public function parent()
    {
        return $this->belongsTo(Place::class, 'parent');
    }

    /**
     * Get the parent record associated with the places.
     */
    public function parentList()
    {
        return Place::all();
    }
}
