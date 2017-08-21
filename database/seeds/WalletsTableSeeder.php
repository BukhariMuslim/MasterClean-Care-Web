<?php

use Illuminate\Database\Seeder;

class WalletsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('wallets')->insert([
            [
                'amt' => 50000,
                'price' => 55000,
            ],
            [
                'amt' => 100000,
                'price' => 105000,
            ],
            [
                'amt' => 200000,
                'price' => 205000,
            ],
            [
                'amt' => 500000,
                'price' => 505000,
            ],
            [
                'amt' => 1000000,
                'price' => 1000000,
            ],
        ]);
    }
}
