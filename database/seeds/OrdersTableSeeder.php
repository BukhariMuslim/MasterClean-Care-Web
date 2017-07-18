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
				'member_id'=>1,
				'art_id'=>1,
				'work_time_id'=>1,
				'start_date'=> Carbon::now(),
				'end_date'=> Carbon::now(),
				'province'=>1,
				'city'=>5,
				'address'=>'Jl. Besar',
				'location'=>'',
				'remark'=>'',
				'status'=>1,
			],

    	]);
    }
}
