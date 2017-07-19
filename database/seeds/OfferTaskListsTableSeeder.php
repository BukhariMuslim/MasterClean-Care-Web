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
	            'task' => 'Mencuci',
	            'status' => 1,
	        ],
			[
	        	'offer_id' => 1,
	            'task' => 'Mengepel',
	            'status' => 1,
	        ],
	        [
	        	'offer_id' => 2,
	            'task' => 'Menjaga Anak',
	            'status' => 1,
	        ],
	        [
	        	'offer_id' => 3,
	            'task' => 'Mengepel',
	            'status' => 1,
	        ],
       ]);
    }
}
