<?php

namespace App\Helpers\Traits;

use Carbon\Carbon;

trait TimeStampTrait {

    public function getCreatedAtAttribute($value)
    {
        $timezone = config('app.timezone');
        
        $date = Carbon::createFromTimestamp(strtotime($value))
            ->timezone($timezone)
            // Leave this part off if you want to keep the property as 
            // a Carbon object rather than always just returning a string
            ->toDateTimeString();

        return $date;
    }
}
