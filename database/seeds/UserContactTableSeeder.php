<?php

use Illuminate\Database\Seeder;

class UserContactTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_contacts')->insert([
            [
                'user_id' => 1,
                'phone' => '081234567890',
                'city' => 1,
                'address' => 'Jl. Besar',
                'location' => ''
            ],
            [
                'user_id' => 2,
                'phone' => '081234123412',
                'city' => 2,
                'address' => 'Jl. Satu',
                'location' => ''
            ],
            [
                'user_id' => 3,
                'phone' => '0888888888',
                'city' => 4,
                'address' => 'Jl. Sana',
                'location' => ''
            ],
            [
                'user_id' => 4,
                'phone' => '0888888888',
                'city' => 3,
                'address' => 'Jl. Sini',
                'location' => ''
            ],
            [
                'user_id' => 5,
                'phone' => '081234432165',
                'city' => 5,
                'address' => 'Jl. Riau',
                'location' => ''
            ],
            [
                'user_id' => 6,
                'phone' => '080808080808',
                'city' => 1,
                'address' => 'Jl. Padang',
                'location' => ''
            ],
            [
                'user_id' => 7,
                'phone' => '08080881123',
                'city' => 2,
                'address' => 'Jl. Satu Lagi',
                'location' => ''
            ],
            [
                'user_id' => 8,
                'phone' => '08080881125',
                'city' => 8,
                'address' => 'Jl. Itu',
                'location' => ''
            ]
        ]);
    }
}
