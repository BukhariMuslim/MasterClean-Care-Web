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
	            'task' => 'Mencuci',
	            'status' => 1,
	        ],
			[
	        	'order_id' => 1,
	            'task' => 'Mengepel',
	            'status' => 1,
	        ],
	        [
	        	'order_id' => 2,
	            'task' => 'Menjaga Anak',
	            'status' => 1,
	        ],
	        [
	        	'order_id' => 3,
	            'task' => 'Mengepel',
	            'status' => 1,
	        ],
       ]);
    }
}
