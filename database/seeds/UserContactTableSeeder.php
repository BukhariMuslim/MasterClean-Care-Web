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
                'province' => 1,
                'city' => 5,
                'address' => 'Jl. Besar',
                'location' => ''
            ],
            [
                'user_id' => 2,
                'phone' => '081234123412',
                'province' => 2,
                'city' => 7,
                'address' => 'Jl. Satu',
                'location' => ''
            ],
            [
                'user_id' => 3,
                'phone' => '0888888888',
                'province' => 2,
                'city' => 6,
                'address' => 'Jl. Sana',
                'location' => ''
            ],
            [
                'user_id' => 4,
                'phone' => '0888888888',
                'province' => 2,
                'city' => 6,
                'address' => 'Jl. Sini',
                'location' => ''
            ],
            [
                'user_id' => 5,
                'phone' => '081234432165',
                'province' => 4,
                'city' => 13,
                'address' => 'Jl. Riau',
                'location' => ''
            ],
            [
                'user_id' => 6,
                'phone' => '080808080808',
                'province' => 3,
                'city' => 12,
                'address' => 'Jl. Padang',
                'location' => ''
            ],
            [
                'user_id' => 7,
                'phone' => '08080881123',
                'province' => 3,
                'city' => 11,
                'address' => 'Jl. Satu Lagi',
                'location' => ''
            ],
            [
                'user_id' => 8,
                'phone' => '08080881125',
                'province' => 2,
                'city' => 8,
                'address' => 'Jl. Itu',
                'location' => ''
            ]
        ]);
    }
}
