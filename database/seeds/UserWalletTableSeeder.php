<?php

use Illuminate\Database\Seeder;

class UserWalletTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_wallets')->insert([
            [
                'user_id' => 1,
                'amt' => 1200000,
            ],
            [
                'user_id' => 2,
                'amt' => 0,
            ],
            [
                'user_id' => 3,
                'amt' => 0,
            ],
            [
                'user_id' => 4,
                'amt' => 0,
            ],
            [
                'user_id' => 5,
                'amt' => 500000,
            ],
            [
                'user_id' => 6,
                'amt' => 450000,
            ],
            [
                'user_id' => 7,
                'amt' => 0,
            ],
            [
                'user_id' => 8,
                'amt' => 0,
            ],
            [
                'user_id' => 9,
                'amt' => 10000000,
            ],
            [
                'user_id' => 10,
                'amt' => 100000000,
            ],
            [
                'user_id' => 11,
                'amt' => 900000,
            ],
            [
                'user_id' => 12,
                'amt' => 70000,
            ],
            [
                'user_id' => 13,
                'amt' => 1000000,
            ],
            [
                'user_id' => 14,
                'amt' => 600000,
            ],
            [
                'user_id' => 15,
                'amt' => 460000,
            ],
            [
                'user_id' => 16,
                'amt' => 780000,
            ],
            [
                'user_id' => 17,
                'amt' => 3200000,
            ],
            [
                'user_id' => 18,
                'amt' => 1950000,
            ]
        ]);
    }
}
