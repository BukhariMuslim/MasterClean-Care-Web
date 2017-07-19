<?php

use Illuminate\Database\Seeder;

class PasswordResetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('password_resets')->insert([
            [
                'email'=>'mrabc@mail.com',
                'token'=>'',
            ],

        ]);
    }
}
