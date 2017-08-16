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
                'user_id' => 2,
                'amt' => 10000000,
            ],
            [
                'user_id' => 3,
                'amt' => 5000000,
            ],
            [
                'user_id' => 4,
                'amt' => 1000000,
            ],
            [
                'user_id' => 5,
                'amt' => 1000000,
            ],
            [
                'user_id' => 15,
                'amt' => 600000,
            ],
        ]);
    }
}
