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
                'religion' => 2,
                'race' => '',
                'user_type' => 1,
                'description' => '',
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
                'religion' => 4,
                'race' => '',
                'user_type' => 2,
                'description' => '',
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
                'religion' => 5,
                'race' => '',
                'user_type' => 2,
                'description' => '',
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
                'religion' => 5,
                'race' => '',
                'user_type' => 2,
                'description' => '',
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
                'religion' => 1,
                'race' => '',
                'user_type' => 1,
                'description' => '',
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
                'religion' => 5,
                'race' => '',
                'user_type' => 1,
                'description' => '',
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
                'religion' => 4,
                'race' => '',
                'user_type' => 2,
                'description' => '',
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
                'religion' => 3,
                'race' => '',
                'user_type' => 2,
                'description' => '',
                'profile_img_name' => '',
                'profile_img_path' => '',
                'status' => 1,
            ],
        ]);
    }
}
