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
                'location' => '3.610485, 98.675769'
            ],
            [
                'user_id' => 2,
                'phone' => '081234123412',
                'city' => 2,
                'address' => 'Jl. Satu',
                'location' => '3.595237, 98.652423'
            ],
            [
                'user_id' => 3,
                'phone' => '0888888888',
                'city' => 3,
                'address' => 'Jl. Sana',
                'location' => '3.605688, 98.707355'
            ],
            [
                'user_id' => 4,
                'phone' => '0888888888',
                'city' => 4,
                'address' => 'Jl. Sini',
                'location' => '3.577248, 98.653796'
            ],
            [
                'user_id' => 5,
                'phone' => '081234432165',
                'city' => 5,
                'address' => 'Jl. Riau',
                'location' => '3.587870, 98.702205'
            ],
            [
                'user_id' => 6,
                'phone' => '080808080808',
                'city' => 6,
                'address' => 'Jl. Padang',
                'location' => '3.588384, 98.681434'
            ],
            [
                'user_id' => 7,
                'phone' => '08080881123',
                'city' => 7,
                'address' => 'Jl. Satu Lagi',
                'location' => '3.572794, 98.656886'
            ],
            [
                'user_id' => 8,
                'phone' => '08080881125',
                'city' => 8,
                'address' => 'Jl. Itu',
                'location' => '3.569196, 98.701175'
            ]
        ]);
    }
}
