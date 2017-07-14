<?php

use Illuminate\Database\Seeder;

class UserAdditionalInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_additional_infos')->insert([
            [
                'user_id' => 2,
                'info_id' => 1,
            ],
            [
                'user_id' => 4,
                'info_id' => 1,
            ],
        ]);
    }
}
