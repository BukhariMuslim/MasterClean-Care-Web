<?php

use Illuminate\Database\Seeder;

class OfferContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offer_contacts')->insert([
            [
                'offer_id'=>1,
                'phone'=>'081234567890',
                'province'=>2,
                'city'=>1,
                'address'=>'Jl. Jalan',
                'location'=>'',
            ],
            [
                'offer_id'=>2,
                'phone'=>'081234567890',
                'province'=>2,
                'city'=>2,
                'address'=>'Jl. Jalan-Jalan',
                'location'=>'',
            ],    
            [
                'offer_id'=>3,
                'phone'=>'081234567890',
                'province'=>3,
                'city'=>2,
                'address'=>'Jl. Jalanzzz',
                'location'=>'',
            ],
        ]);
    }
}
