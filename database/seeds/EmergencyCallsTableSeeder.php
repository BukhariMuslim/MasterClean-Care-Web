<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class EmergencyCallsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('emergency_calls')->insert([
            [
                'user_id' => 4,
                'init_time' => Carbon::create('2017', '06', '19', '08', '0', '0'),
                'status' => 0,
                'created_at' => Carbon::create('2017', '06', '19', '08', '0', '0')
                ],

            [
                'user_id' => 2,
                'init_time' => Carbon::create('2017', '06', '1', '5', '0', '0'),
                'status' => 0,
                'created_at' => Carbon::create('2017', '06', '1', '5', '0', '0')
            ],

            [
                'user_id' => 3,
                'init_time' => Carbon::create('2017', '06', '11', '9', '0', '0'),
                'status' => 0,
                'created_at' => Carbon::create('2017', '06', '11', '9', '0', '0')
            ],

            [
                'user_id' => 17,
                'init_time' => Carbon::create('2017', '06', '6', '5', '0', '0'),
                'status' => 0,
                'created_at' => Carbon::create('2017', '06', '6', '5', '0', '0')
            ],
    	]);
    }
}
