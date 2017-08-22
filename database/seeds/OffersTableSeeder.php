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
                'member_id'=>5,
                'work_time_id'=>1,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '07', '20', '09', '0', '0'),
                'end_date'=>Carbon::create('2017', '07', '20', '12', '0', '0'),
                'cost'=>150000,
                'remark'=>'',
                'status'=>0,
            ],
            [
                'member_id'=>2,
                'work_time_id'=>1,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '07', '20', '09', '0', '0'),
                'end_date'=>Carbon::create('2017', '07', '20', '12', '0', '0'),
                'cost'=>150000,
                'remark'=>'',
                'status'=>0,
            ],
            [
                'member_id'=>2,
                'work_time_id'=>2,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '07', '21', '8', '0', '0'),
                'end_date'=>Carbon::create('2017', '07', '21', '17', '0', '0'),
                'cost'=>150000,
                'remark'=>'Kalau kerjanya bagus saya buat pesanan satu bulan',
                'status'=>0,
            ],
            [
                'member_id'=>2,
                'work_time_id'=>2,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '08', '1', '8', '0', '0'),
                'end_date'=>Carbon::create('2017', '08', '1', '17', '0', '0'),
                'cost'=>150000,
                'remark'=>'Kalau kerjanya bagus saya buat pesanan satu bulan',
                'status'=>0,
            ],
            [
                'member_id'=>3,
                'work_time_id'=>2,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '08', '5', '8', '0', '0'),
                'end_date'=>Carbon::create('2017', '08', '5', '17', '0', '0'),
                'cost'=>160000,
                'remark'=>'Kalau kerjanya bagus saya buat pesanan satu bulan khusus penerima',
                'status'=>0,
            ],
            [
                'member_id'=>4,
                'work_time_id'=>2,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '08', '10', '8', '0', '0'),
                'end_date'=>Carbon::create('2017', '08', '10', '17', '0', '0'),
                'cost'=>180000,
                'remark'=>'Yang bisa masak (Nasi goreng)',
                'status'=>0,
            ],
            [
                'member_id'=>5,
                'work_time_id'=>2,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '08', '21', '8', '0', '0'),
                'end_date'=>Carbon::create('2017', '08', '21', '17', '0', '0'),
                'cost'=>180000,
                'remark'=>'Saya terima yang pertama daftar',
                'status'=>0,
            ],
            [
                'member_id'=>2,
                'work_time_id'=>2,
                'job_id'=>1,
                'start_date'=>Carbon::create('2017', '08', '6', '8', '0', '0'),
                'end_date'=>Carbon::create('2017', '08', '6', '17', '0', '0'),
                'cost'=>180000,
                'remark'=>'Saya terima yang pertama daftar',
                'status'=>0,
            ],
        ]);
    }
}
