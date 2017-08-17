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
                'user_id' => 6,
                'language_id' => 1,
            ],
            [
                'user_id' => 6,
                'language_id' => 2,
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
                'language_id' => 1,
            ],
            [
                'user_id' => 9,
                'language_id' => 1,
            ],
            [
                'user_id' => 9,
                'language_id' => 2,
            ],
            [
                'user_id' => 10,
                'language_id' => 1,
            ],
            [
                'user_id' => 10,
                'language_id' => 2,
            ],
            [
                'user_id' => 11,
                'language_id' => 1,
            ],
            [
                'user_id' => 11,
                'language_id' => 2,
            ],
            [
                'user_id' => 12,
                'language_id' => 1,
            ],
            [
                'user_id' => 12,
                'language_id' => 2,
            ],
            [
                'user_id' => 13,
                'language_id' => 1,
            ],
            [
                'user_id' => 13,
                'language_id' => 2,
            ],
            [
                'user_id' => 14,
                'language_id' => 1,
            ],
            [
                'user_id' => 15,
                'language_id' => 1,
            ],
            [
                'user_id' => 16,
                'language_id' => 1,
            ],
            [
                'user_id' => 16,
                'language_id' => 2,
            ],
            [
                'user_id' => 17,
                'language_id' => 1,
            ],
            [
                'user_id' => 17,
                'language_id' => 2,
            ],
            [
                'user_id' => 18,
                'language_id' => 1,
            ],
            [
                'user_id' => 18,
                'language_id' => 2,
            ]
        ]);
    }
}
