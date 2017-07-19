<?php

namespace App\Helper\Traits;

use App\Models\User;


trait UserTrait {

    public function user(){
        return $this->belongsTo(User::class);
    }
}
