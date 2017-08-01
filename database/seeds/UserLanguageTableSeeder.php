<?php

use Illuminate\Database\Seeder;

class UserLanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_languages')->insert([
            [
                'user_id' => 2,
                'language_id' => 1,
            ],
            [
                'user_id' => 2,
                'language_id' => 2,
            ],
            [
                'user_id' => 3,
                'language_id' => 1,
            ],
            [
                'user_id' => 4,
                'language_id' => 1,
            ],
            [
                'user_id' => 7,
                'language_id' => 1,
            ],
            [
                'user_id' => 7,
                'language_id' => 2,
            ],
            [
                'user_id' => 8,
                'language_id' => 2,
            ],
        ]);
    }
}
