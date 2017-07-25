<?php

namespace App\Helper\Traits;

use App\Models\User;


trait UserTrait {

    public function userId(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function userIdList(){
        return User::where('status', 1)->orderBy('name')->get();
    }
}
