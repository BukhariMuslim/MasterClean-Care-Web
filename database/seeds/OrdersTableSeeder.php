<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;


class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        DB::table('orders')->insert([
        	[
				'member_id' => 1,
				'art_id' => 2,
				'work_time_id' => 1,
				'start_date' => Carbon::create('2017', '07', '19', '09', '0', '0'),
				'end_date' => Carbon::create('2017', '07', '19', '12', '0', '0'),
				'cost' => 250000,
				'remark' => '',
				'status' => 1
			],
			[
				'member_id' => 5,
				'art_id' => 3,
				'work_time_id' => 2,
				'start_date' => Carbon::create('2017', '07', '19', '0', '0', '0'),
				'end_date' => Carbon::create('2017', '07', '21', '0', '0', '0'),
				'cost' => 560000,
				'remark' => '',
				'status' => 1
			],
			[
				'member_id' => 6,
				'art_id' => 2,
				'work_time_id' => 1,
				'start_date' => Carbon::create('2017', '07', '20', '12', '0', '0'),
				'end_date' => Carbon::create('2017', '07', '20', '14', '0', '0'),
				'cost' => 225000,
				'remark' => '',
				'status' => 1
			],
    	]);
    }
}
