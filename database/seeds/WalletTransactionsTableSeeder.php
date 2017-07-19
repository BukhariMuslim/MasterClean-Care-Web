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
                'wallet_id'=>1,
                'trc_type'=>1,
                'trc_time'=> Carbon::create('2017', '07', '19', '10', '15', '0'),
                'wallet_code'=>'stingwalletcode',
            ],
            [
                'user_id'=>3,
                'wallet_id'=>2,
                'trc_type'=>1,
                'trc_time'=> Carbon::create('2017', '07', '19', '11', '15', '0'),
                'wallet_code'=>'stingwalletcode1',
            ],
        ]);
    }
}
