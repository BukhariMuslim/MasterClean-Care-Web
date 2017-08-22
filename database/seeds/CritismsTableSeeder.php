<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;


class CritismsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        DB::table('critisms')->insert([
        	[
			'email' => 2,
			'content' => 'Saya lebih suka kalau warna dasar tampilan aplikasi hijau',
                	'created_at' => Carbon::create('2017', '6', '19', '8', '0', '0')
		],
        	[
			'email' => 3,
			'content' => 'Aplikasinya bagus, tapi saya masih kesulitan melakukan top up.',
                	'created_at' => Carbon::create('2017', '6', '20', '1', '0', '0')
		],
        	[
			'email' => 15,
			'content' => 'Saya rasa aplikasinya sudah dapat memenuhi kebutuhan saya',
                	'created_at' => Carbon::create('2017', '7', '1', '10', '0', '0')
		],
    	]);
    }
}
