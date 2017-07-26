<?php

use Illuminate\Database\Seeder;

class OfferTaskListsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offer_task_lists')->insert([
        	[
	        	'offer_id' => 1,
				'task_list_id' => 1,
	            'status' => 1,
	        ],
			[
	        	'offer_id' => 1,
	            'task_list_id' => 2,
	            'status' => 1,
	        ],
	        [
	        	'offer_id' => 2,
	            'task_list_id' => 10,
	            'status' => 1,
	        ],
	        [
	        	'offer_id' => 3,
	            'task' => 1,
	            'status' => 1,
	        ],
       ]);
    }
}
