<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class WalletTransactionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('wallet_transactions')->insert([
            [
                'user_id'=>2,
                'amount'=>5000000,
                'trc_type'=>0,
		'trc_img'=>'users/ncBa7ORi81VueI9Sv3Aw.jpg',
                'trc_time'=> Carbon::create('2017', '06', '19', '10', '15', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '06', '19', '10', '15', '0')
            ],
            [
                'user_id'=>2,
                'amount'=>5000000,
                'trc_type'=>0,
		'trc_img'=>'users/ncBa7ORi81VueI9Sv3Aw.jpg',
                'trc_time'=> Carbon::create('2017', '07', '21', '10', '15', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '07', '21', '10', '15', '0')
            ],
            [
                'user_id'=>2,
                'amount'=>1000000,
                'trc_type'=>0,
		'trc_img'=>'users/ncBa7ORi81VueI9Sv3Aw.jpg',
                'trc_time'=> Carbon::create('2017', '07', '24', '10', '15', '0'),
                'status'=> 0,
		'created_at' = > Carbon::create('2017', '07', '24', '10', '15', '0')
            ],
            [
                'user_id'=>3,
                'amount'=>5000000,
                'trc_type'=>0,
		'trc_img'=>'users/ncBa7ORi81VueI9Sv3Aw.jpg',
                'trc_time'=> Carbon::create('2017', '07', '19', '1', '16', '0'),
                'status'=> 0,
		'created_at' = > Carbon::create('2017', '07', '19', '1', '16', '0')
            ],
            [
                'user_id'=>4,
                'amount'=>1000000,
                'trc_type'=>0,
		'trc_img'=>'users/ncBa7ORi81VueI9Sv3Aw.jpg',
                'trc_time'=> Carbon::create('2017', '07', '19', '8', '10', '0'),
                'status'=> 0,
		'created_at' = > Carbon::create('2017', '07', '19', '8', '10', '0')
            ],
            [
                'user_id'=>5,
                'amount'=>1000000,
                'trc_type'=>0,
		'trc_img'=>'users/ncBa7ORi81VueI9Sv3Aw.jpg',
                'trc_time'=> Carbon::create('2017', '07', '19', '11', '9', '0'),
                'status'=> 0,
		'created_at' = > Carbon::create('2017', '07', '19', '11', '9', '0')
            ],
            [
                'user_id'=>5,
                'amount'=>250000,
                'trc_type'=>1,
		'trc_img'=>' ',                
		'trc_time' => Carbon::create('2017', '6', '20', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '20', '17', '0', '0')
            ],
            [
                'user_id'=>11,
                'amount'=>250000,
                'trc_type'=>0,
		'trc_img'=>' ',                
                'trc_time'=> Carbon::create('2017', '6', '20', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '20', '17', '0', '0')
            ],
            [
                'user_id'=>2,
                'amount'=>150000,
                'trc_type'=>1,
		'trc_img'=>' ',                
		'trc_time' => Carbon::create('2017', '6', '20', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '20', '17', '0', '0')
            ],
            [
                'user_id'=>15,
                'amount'=>150000,
                'trc_type'=>0,
		'trc_img'=>' ',                
                'trc_time'=> Carbon::create('2017', '6', '20', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '20', '17', '0', '0')
            ],
            [
                'user_id'=>2,
                'amount'=>150000,
                'trc_type'=>1,
		'trc_img'=>' ',                
        	'trc_time' => Carbon::create('2017', '6', '5', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '5', '17', '0', '0')
            ],
            [
                'user_id'=>15,
                'amount'=>150000,
                'trc_type'=>0,
		'trc_img'=>' ',                
                'trc_time'=> Carbon::create('2017', '6', '5', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '5', '17', '0', '0')
            ],
            [
                'user_id'=>2,
                'amount'=>150000,
                'trc_type'=>1,
		'trc_img'=>' ',                
		'trc_time' => Carbon::create('2017', '6', '5', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '5', '17', '0', '0')
            ],
            [
                'user_id'=>15,
                'amount'=>150000,
                'trc_type'=>0,
		'trc_img'=>' ',                
                'trc_time'=> Carbon::create('2017', '6', '24', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '24', '17', '0', '0')
            ],
            [
                'user_id'=>2,
                'amount'=>150000,
                'trc_type'=>1,
		'trc_img'=>' ',                
		'trc_time' => Carbon::create('2017', '6', '7', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '7', '17', '0', '0')
            ],
            [
                'user_id'=>15,
                'amount'=>150000,
                'trc_type'=>0,
		'trc_img'=>' ',                
                'trc_time'=> Carbon::create('2017', '6', '7', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '6', '7', '17', '0', '0')
            ],
            [
                'user_id'=>3,
                'amount'=>2200000,
                'trc_type'=>1,
		'trc_img'=>' ',                
		'trc_time' => Carbon::create('2017', '7', '19', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '7', '19', '17', '0', '0')
            ],
            [
                'user_id'=>12,
                'amount'=>2200000,
                'trc_type'=>0,
		'trc_img'=>' ',                
                'trc_time'=> Carbon::create('2017', '7', '19', '17', '0', '0'),
                'status'=> 1,
		'created_at' = > Carbon::create('2017', '7', '19', '17', '0', '0')
            ],
        ]);
    }
}
