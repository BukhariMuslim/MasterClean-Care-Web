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
                'city' => 2,
                'address' => 'Jl. Sana',
                'location' => '3.605688, 98.707355'
            ],
            [
                'user_id' => 4,
                'phone' => '0888888888',
                'city' => 2,
                'address' => 'Jl. Sini',
                'location' => '3.577248, 98.653796'
            ],
            [
                'user_id' => 5,
                'phone' => '081234432165',
                'city' => 2,
                'address' => 'Jl. Riau',
                'location' => '3.587870, 98.702205'
            ],
            [
                'user_id' => 6,
                'phone' => '080808080808',
                'city' => 2,
                'address' => 'Jl. Padang',
                'location' => '3.588384, 98.681434'
            ],
            [
                'user_id' => 7,
                'phone' => '08080881123',
                'city' => 2,
                'address' => 'Jl. Satu Lagi',
                'location' => '3.572794, 98.656886'
            ],
            [
                'user_id' => 8,
                'phone' => '08080198897',
                'city' => 2,
                'address' => 'Jl. Itu',
                'location' => '3.569196, 98.701175'
            ],
            [
                'user_id' => 9,
                'phone' => '08086784563',
                'city' => 2,
                'address' => 'Jl. Jepara',
                'location' => '3.569196, 98.701175'
            ],
            [
                'user_id' => 10,
                'phone' => '08086283749',
                'city' => 2,
                'address' => 'Jl. Thamrin',
                'location' => '3.569196, 98.701175'
            ],
            [
                'user_id' => 11,
                'phone' => '08080739286',
                'city' => 2,
                'address' => 'Jl. Denai',
                'location' => '-6.154048, 106.776076'
            ],
            [
                'user_id' => 12,
                'phone' => '08089107384',
                'city' => 2,
                'address' => 'Jl. Tomat',
                'location' => '3.603704, 98.693814'
            ],
            [
                'user_id' => 13,
                'phone' => '08082918375',
                'city' => 2,
                'address' => 'Jl. Mangga',
                'location' => '3.590341, 98.679223'
            ],
            [
                'user_id' => 14,
                'phone' => '08089572837',
                'city' => 2,
                'address' => 'Jl. Padi',
                'location' => '3.615525, 98.651586'
            ],
            [
                'user_id' => 15,
                'phone' => '08080925835',
                'city' => 2,
                'address' => 'Jl. Buntu',
                'location' => '3.577834, 98.666349'
            ],
            [
                'user_id' => 16,
                'phone' => '08080886392',
                'city' => 2,
                'address' => 'Jl. Ujung',
                'location' => '3.566698, 98.701024'
            ],
            [
                'user_id' => 17,
                'phone' => '08089882125',
                'city' => 2,
                'address' => 'Jl. Merdeka',
                'location' => '3.550764, 98.651071'
            ],
            [
                'user_id' => 18,
                'phone' => '08080881125',
                'city' => 2,
                'address' => 'Jl. Halat',
                'location' => '3.566698, 98.712869'
            ]
        ]);
    }
}
