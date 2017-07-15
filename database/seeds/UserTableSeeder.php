<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Mr. ABC',
                'email' => 'mrabc@mail.com',
                'password' => Hash::make('mrabc'),
                'gender' => 1,
                'born_place' => 'Medan',
                'born_date' => Carbon::create('1990', '02', '04'),
                'phone' => '081234567890',
                'province' => 1,
                'city' => 5,
                'address' => 'Jl. Besar',
                'location' => '',
                'religion' => 2,
                'race' => '',
                'user_type' => 1,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
            [
                'name' => 'Art 1',
                'email' => 'art1@mail.com',
                'password' => Hash::make('art1'),
                'gender' => 2,
                'born_place' => 'Medan',
                'born_date' => Carbon::create('1987', '09', '06'),
                'phone' => '081234123412',
                'province' => 2,
                'city' => 7,
                'address' => 'Jl. Satu',
                'location' => '',
                'religion' => 4,
                'race' => '',
                'user_type' => 2,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
            [
                'name' => 'Art 2',
                'email' => 'art2@mail.com',
                'password' => Hash::make('art2'),
                'gender' => 1,
                'born_place' => 'Deli Serdang',
                'born_date' => Carbon::create('1980', '01', '12'),
                'phone' => '0888888888',
                'province' => 2,
                'city' => 6,
                'address' => 'Jl. Sana',
                'location' => '',
                'religion' => 5,
                'race' => '',
                'user_type' => 2,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
            [
                'name' => 'Art 3',
                'email' => 'art3@mail.com',
                'password' => Hash::make('art3'),
                'gender' => 1,
                'born_place' => 'Binjai',
                'born_date' => Carbon::create('1990', '05', '12'),
                'phone' => '0888888888',
                'province' => 2,
                'city' => 6,
                'address' => 'Jl. Sini',
                'location' => '',
                'religion' => 5,
                'race' => '',
                'user_type' => 2,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 0,
            ],
            [
                'name' => 'Member 1',
                'email' => 'member1@mail.com',
                'password' => Hash::make('member1'),
                'gender' => 1,
                'born_place' => 'Medan',
                'born_date' => Carbon::create('1985', '06', '06'),
                'phone' => '081234432165',
                'province' => 4,
                'city' => 13,
                'address' => 'Jl. Riau',
                'location' => '',
                'religion' => 1,
                'race' => '',
                'user_type' => 1,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
            [
                'name' => 'Member 2',
                'email' => 'member2@mail.com',
                'password' => Hash::make('member2'),
                'gender' => 1,
                'born_place' => 'Medan',
                'born_date' => Carbon::create('1982', '08', '11'),
                'phone' => '080808080808',
                'province' => 3,
                'city' => 12,
                'address' => 'Jl. Padang',
                'location' => '',
                'religion' => 5,
                'race' => '',
                'user_type' => 1,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
            [
                'name' => 'Art 4',
                'email' => 'art4@mail.com',
                'password' => Hash::make('art4'),
                'gender' => 2,
                'born_place' => 'Medan',
                'born_date' => Carbon::create('1988', '08', '08'),
                'phone' => '08080881123',
                'province' => 3,
                'city' => 11,
                'address' => 'Jl. Satu Lagi',
                'location' => '',
                'religion' => 4,
                'race' => '',
                'user_type' => 2,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
            [
                'name' => 'Art 5',
                'email' => 'art5@mail.com',
                'password' => Hash::make('art5'),
                'gender' => 2,
                'born_place' => 'Tebing Tinggi',
                'born_date' => Carbon::create('1989', '09', '09'),
                'phone' => '08080881125',
                'province' => 2,
                'city' => 8,
                'address' => 'Jl. Itu',
                'location' => '',
                'religion' => 3,
                'race' => '',
                'user_type' => 2,
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
        ]);
    }
}