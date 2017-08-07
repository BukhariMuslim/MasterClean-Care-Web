<?php

use Illuminate\Database\Seeder;

class UserWorkTimeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_work_times')->insert([
            [
                'user_id' => 2,
                'work_time_id' => 1,
                'cost' => 50000,
            ],
            [
                'user_id' => 2,
                'work_time_id' => 2,
                'cost' => 200000,
            ],
            [
                'user_id' => 3,
                'work_time_id' => 2,
                'cost' => 150000,
            ],
            [
                'user_id' => 4,
                'work_time_id' => 1,
                'cost' => 45000,
            ],
            [
                'user_id' => 7,
                'work_time_id' => 1,
                'cost' => 47000,
            ],
            [
                'user_id' => 7,
                'work_time_id' => 2,
                'cost' => 180000,
            ],
            [
                'user_id' => 7,
                'work_time_id' => 3,
                'cost' => 1800000,
            ],
            [
                'user_id' => 8,
                'work_time_id' => 3,
                'cost' => 1750000,
            ],
            [
                'user_id' => 11,
                'work_time_id' => 1,
                'cost' => 50000,
            ],
            [
                'user_id' => 11,
                'work_time_id' => 2,
                'cost' => 200000,
            ],
            [
                'user_id' => 11,
                'work_time_id' => 3,
                'cost' => 2000000,
            ],
            [
                'user_id' => 12,
                'work_time_id' => 1,
                'cost' => 55000,
            ],
            [
                'user_id' => 12,
                'work_time_id' => 2,
                'cost' => 210000,
            ],
            [
                'user_id' => 12,
                'work_time_id' => 3,
                'cost' => 2200000,
            ],
            [
                'user_id' => 13,
                'work_time_id' => 1,
                'cost' => 40000,
            ],
            [
                'user_id' => 13,
                'work_time_id' => 2,
                'cost' => 190000,
            ],
            [
                'user_id' => 13,
                'work_time_id' => 3,
                'cost' => 1900000,
            ],
            [
                'user_id' => 14,
                'work_time_id' => 1,
                'cost' => 60000,
            ],
            [
                'user_id' => 14,
                'work_time_id' => 2,
                'cost' => 200000,
            ],
            [
                'user_id' => 14,
                'work_time_id' => 3,
                'cost' => 3000000,
            ],
            [
                'user_id' => 15,
                'work_time_id' => 1,
                'cost' => 80000,
            ],
            [
                'user_id' => 15,
                'work_time_id' => 2,
                'cost' => 150000,
            ],
            [
                'user_id' => 15,
                'work_time_id' => 3,
                'cost' => 1800000,
            ],
            [
                'user_id' => 16,
                'work_time_id' => 1,
                'cost' => 50000,
            ],
            [
                'user_id' => 16,
                'work_time_id' => 2,
                'cost' => 200000,
            ],
            [
                'user_id' => 16,
                'work_time_id' => 3,
                'cost' => 2500000,
            ],
            [
                'user_id' => 17,
                'work_time_id' => 1,
                'cost' => 70000,
            ],
            [
                'user_id' => 17,
                'work_time_id' => 2,
                'cost' => 150000,
            ],
            [
                'user_id' => 17,
                'work_time_id' => 3,
                'cost' => 1400000,
            ],
            [
                'user_id' => 18,
                'work_time_id' => 1,
                'cost' => 50000,
            ],
            [
                'user_id' => 18,
                'work_time_id' => 2,
                'cost' => 300000,
            ],
            [
                'user_id' => 18,
                'work_time_id' => 3,
                'cost' => 5000000,
            ]
        ]);
    }
}
