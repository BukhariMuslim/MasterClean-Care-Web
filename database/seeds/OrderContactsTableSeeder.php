<?php

use Illuminate\Database\Seeder;

class OrderContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('order_contacts')->insert([
            [
                'order_id'=>1,
                'phone'=>'081234567890',
                'province'=>2,
                'city'=>1,
                'address'=>'Jl. Jalan order',
                'location'=>'',
            ],
            [
                'order_id'=>2,
                'phone'=>'081234567890',
                'province'=>2,
                'city'=>2,
                'address'=>'Jl. Jalan-Jalan order',
                'location'=>'',
            ],    
            [
                'order_id'=>3,
                'phone'=>'081234567890',
                'province'=>3,
                'city'=>2,
                'address'=>'Jl. Jalan order3',
                'location'=>'',
            ],
        ]);
    }
}
