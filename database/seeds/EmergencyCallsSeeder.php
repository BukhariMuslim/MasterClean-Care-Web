<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class EmergencyCallsSeeder extends Seeder
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
				'user_id' => 1,   
		        'init_time' => Carbon::now(),
		        'status' => 0,
		    ],

		   	[
				'user_id' => 2,   
		        'init_time' => Carbon::now(),
		        'status' => 1,
		   	],

		   	[
				'user_id' => 3,   
		        'init_time' => Carbon::now(),
		        'status' => 1,
		   	],

    	]);
    }
}
