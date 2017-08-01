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
        ]);
    }
}
