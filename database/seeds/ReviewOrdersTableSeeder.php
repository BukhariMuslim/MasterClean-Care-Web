<?php

use Illuminate\Database\Seeder;

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
	        ],
			[
	        	'order_id' => 2,
	        	'rate' => 5,
	        	'remark' => '',
	        ],
	        [
	        	'order_id' => 3,
	        	'rate' => 4,
	        	'remark' => '',
	        ],
        ]);
    }
}
