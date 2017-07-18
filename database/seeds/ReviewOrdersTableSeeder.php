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
	        	'order_id'=>1,
	        	'rate'=>3,
	        	'remark'=>'bla bla bla'
	        ],

	        [
	        	'order_id'=>2,
	        	'rate'=>5,
	        	'remark'=>'bla bla bla by order id 2'
	        ],

	        [
	        	'order_id'=>3,
	        	'rate'=>4,
	        	'remark'=>'bla bla bla by order id 3'
	        ],
	        
        ]);
    }
}
