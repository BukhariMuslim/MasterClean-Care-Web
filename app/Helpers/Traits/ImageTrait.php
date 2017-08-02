<?php

namespace App\Helpers\Traits;

trait ImageTrait {

    public function getProduction()
    {
        return env('APP_ENV') == 'production';
    }

    public function generateUserPictureLinks($filename)
    {
        $secure = $this->getProduction();
        if ($filename) {
            return [
                'small'     => url('/image/small', $filename, $secure),
                'medium'    => url('/image/medium', $filename, $secure),
                'large'     => url('/image/large', $filename, $secure),
            ];
        }
    }
}
