<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class OauthPersonalAccessClientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_personal_access_clients')->insert([
            [
                'client_id'=>1,
                'created_at'=>new Carbon(),
                'updated_at'=>new Carbon(),
            ],
        ]);
    }
}
