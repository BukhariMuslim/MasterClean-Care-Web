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
        DB::table('reports')->insert([
        	[
			'user_id' => 2,
			'reporter_id' => 15,
			'remark' => 'Gina terlambat satu jam dari waktu pemesanan',
		],
        	[
			'user_id' => 15,
			'reporter_id' => 2,
			'remark' => 'Andi tidak dapat dihubungi saat saya terkena macat, dan menyebabkan saya terlambat',
		],
    	]);
    }
}
