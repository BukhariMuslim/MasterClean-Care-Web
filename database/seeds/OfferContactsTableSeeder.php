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
                'phone'=>'081234432165',
                'city'=>2,
                'address' => 'Jl. Riau',
                'location' => '3.587870, 98.702205'
            ],
            [
                'offer_id'=>2,
                'phone'=>'081234123412',
                'city' => 2,
                'address' => 'Jl. Satu',
                'location' => '3.595237, 98.652423'
            ],    
            [
                'offer_id'=>3,
                'phone'=>'081234123412',
                'city' => 2,
                'address' => 'Jl. Satu',
                'location' => '3.595237, 98.652423'
            ],
        ]);
    }
}
