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
                'phone' => '081234432165',
                'city' => 2,
                'address' => 'Jl. Keluarga No.22, Denai, Medan',
                'location' => '3.587870, 98.702205'
            ],
            [
                'offer_id'=>2,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl. Gotong Royong No.22, Denai, Medan',
                'location' => '3.595237, 98.652423'
            ],
            [
                'offer_id'=>3,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl. Gotong Royong No.22, Denai, Medan',
                'location' => '3.595237, 98.652423'
            ],
            [
                'offer_id'=>4,
                'phone' => '0888888888',
                'city' => 2,
                'address' => 'Jl. Gotong Royong No.22, Denai, Medan',
                'location' => '3.605688, 98.707355',
            ],
            [
                'offer_id'=>4,
                'phone' => '0888888888',
                'city' => 2,
                'address' => 'Jl. Bersama No.2, Denai, Medan',
                'location' => '3.577248, 98.653796',
            ],
            [
                'offer_id'=>4,
                'phone' => '081234432165',
                'city' => 2,
                'address' => 'Jl. Keluarga No.22, Denai, Medan',
                'location' => '3.587870, 98.702205',
            ],
            [
                'offer_id'=>4,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl. Gotong Royong No.22, Denai, Medan',
                'location' => '3.595237, 98.652423'
            ],
        ]);
    }
}
