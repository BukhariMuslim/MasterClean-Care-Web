<?php

use Illuminate\Database\Seeder;

class OrderTaskListTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('order_task_lists')->insert([
        	[
	        	'order_id' => 1,
			'task_list_id' => 2,
			'status' => 0,
	        ],
		[
	        	'order_id' => 1,
			'task_list_id' => 5,
			'status' => 0,
	        ],
	        [
	        	'order_id' => 2,
			'task_list_id' => 10,
			'status' => 0,
	        ],
	        [
	        	'order_id' => 3,
			'task' => 4,
			'status' => 0,
	        ],
       ]);
    }
}
