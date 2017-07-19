<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class OffersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offers')->insert([

            [
                'member_id'=>1,
                'work_time_id'=>1,
                'start_date'=>Carbon::create('2017', '07', '19', '09', '0', '0'),
                'end_date'=>Carbon::create('2017', '07', '19', '12', '0', '0'),
                'remark'=>'',
                'status'=>1,
            ],

            [
                'member_id'=>2,
                'work_time_id'=>2,
                'start_date'=>Carbon::create('2017', '07', '19', '12', '0', '0'),
                'end_date'=>Carbon::create('2017', '07', '19', '14', '0', '0'),
                'remark'=>'',
                'status'=>1,
            ],
            [
                'member_id'=>3,
                'work_time_id'=>3,
                'start_date'=>Carbon::create('2017', '07', '19', '15', '0', '0'),
                'end_date'=>Carbon::create('2017', '07', '19', '17', '0', '0'),
                'remark'=>'',
                'status'=>1,
            ],

        ]);
    }
}
