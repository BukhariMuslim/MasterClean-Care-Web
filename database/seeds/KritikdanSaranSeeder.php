<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;


class ReportTableSeeder extends Seeder
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
		],
        	[
			'email' => 3,
			'content' => 'Aplikasinya bagus, tapi saya masih kesulitan melakukan top up.',
		],
        	[
			'email' => 15,
			'content' => 'Saya rasa aplikasinya sudah dapat memenuhi kebutuhan saya',
		],
    	]);
    }
}
