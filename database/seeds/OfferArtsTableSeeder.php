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
                'offer_id'=>3,
                'art_id'=>15,
                'status'=>0,
            ],
            [
                'offer_id'=>3,
                'art_id'=>16,
                'status'=>0,
            ],
            [
                'offer_id'=>3,
                'art_id'=>12,
                'status'=>0,
            ],
        ]);
    }
}
