<?php

use Illuminate\Database\Seeder;

class OfferArtsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offer_arts')->insert([
            [
                'offer_id'=>1,
                'art_id'=>1,
                'status'=>1,
            ],
            [
                'offer_id'=>2,
                'art_id'=>2,
                'status'=>1,
            ],
            [
                'offer_id'=>2,
                'art_id'=>3,
                'status'=>1,
            ],
        ]);
    }
}
