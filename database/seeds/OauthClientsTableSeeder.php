<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class OauthClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            [
                'user_id'=>'',
                'name'=>'Laravel Personal Access Client',
                'secret'=>'ZBTJnvr1AunlviygsBkmUmTCCEjKF84AoQjuLYEb',
                'redirect'=>'http://localhost',
                'personal_access_client'=>1,
                'password_client'=>0,
                'revoked'=>0,
                'created_at'=>new Carbon(),
                'updated_at'=>new Carbon(),
            ],
            [
                'user_id'=>'',
                'name'=>'Laravel Password Grant Client',
                'secret'=>'5dew8TWTollA6wZ7xSrppUeMOOmlWIS435cmUqzc',
                'redirect'=>'http://localhost',
                'personal_access_client'=>0,
                'password_client'=>1,
                'revoked'=>0,
                'created_at'=>new Carbon(),
                'updated_at'=>new Carbon(),
            ],    
        ]);
    }
}
