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
                'city'=>7,
                'address'=>'Jl. Jalan order',
                'location'=>'',
            ],
            [
                'order_id'=>2,
                'phone'=>'081234567890',
                'city'=>9,
                'address'=>'Jl. Jalan-Jalan order',
                'location'=>'',
            ],    
            [
                'order_id'=>3,
                'phone'=>'081234567890',
                'city'=>6,
                'address'=>'Jl. Jalan order3',
                'location'=>'',
            ],
        ]);
    }
}
