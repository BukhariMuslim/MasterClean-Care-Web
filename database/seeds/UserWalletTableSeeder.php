<?php

use Illuminate\Database\Seeder;

class UserWalletTablSeeder extends Seeder
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
        ]);
    }
}
