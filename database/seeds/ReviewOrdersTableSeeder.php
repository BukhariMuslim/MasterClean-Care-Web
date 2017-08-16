<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ReviewOrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('review_orders')->insert([
	        [
	        	'order_id' => 1,
	        	'rate' => 3,
	        	'remark' => '',
	                'created_at' => Carbon::create('2017', '6', '19', '12', '0', '0')
	        ],
	        [
	        	'order_id' => 2,
	        	'rate' => 5,
	        	'remark' => 'Mantap',
	                'created_at' => Carbon::create('2017', '6', '20', '17', '0', '0')
	        ],
	        [
	        	'order_id' => 3,
	        	'rate' => 4,
	        	'remark' => 'Good job',
	                'created_at' => Carbon::create('2017', '6', '5', '17', '0', '0')
	        ],
	        [
	        	'order_id' => 4,
	        	'rate' => 4,
	        	'remark' => '',
	                'created_at' => Carbon::create('2017', '6', '24', '17', '0', '0')
	        ],
	        [
	        	'order_id' => 5,
	        	'rate' => 3,
	        	'remark' => 'Kamu telat',
	                'created_at' => Carbon::create('2017', '6', '7', '17', '0', '0')
	        ],
	        [
	        	'order_id' => 9,
	        	'rate' => 5,
	        	'remark' => 'Kerja kamu bagus',
	                'created_at' => Carbon::create('2017', '7', '19', '17', '0', '0')
	        ],
        ]);
    }
}
