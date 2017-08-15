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
                'phone'=>'081234432165',
                'city'=>2,
                'address'=>'Jl. Riau',
                'location'=>'3.587870, 98.702205',
            ],
            [
                'order_id'=>2,
                'phone'=>'081234123412',
                'city'=>2,
                'address'=>'Jl. Satu',
                'location'=>'3.595237, 98.652423',
            ],
            [
                'order_id'=>3,
                'phone'=>'081234123412',
                'city'=>2,
                'address'=>'Jl. Satu',
                'location'=>'3.595237, 98.652423',
            ],
            [
                'order_id'=>4,
                'phone'=>'081234123412',
                'city'=>2,
                'address'=>'Jl. Satu',
                'location'=>'3.595237, 98.652423',
            ],
            [
                'order_id'=>5,
                'phone'=>'081234123412',
                'city'=>2,
                'address'=>'Jl. Satu',
                'location'=>'3.595237, 98.652423',
            ],
            [
                'order_id'=>6,
                'phone'=>'0888888888',
                'city'=>2,
                'address'=>'Jl. Padang',
                'location'=>'3.588384, 98.681434',
            ],
            [
                'order_id'=>7,
                'phone'=>'0888888888',
                'city'=>2,
                'address'=>'Jl. Padang',
                'location'=>'3.588384, 98.681434',
            ],
            [
                'order_id'=>8,
                'phone'=>'0888888888',
                'city'=>2,
                'address'=>'Jl. Padang',
                'location'=>'3.588384, 98.681434',
            ],
            [
                'order_id'=>9,
                'phone'=>'0888888888',
                'city'=>2,
                'address'=>'Jl. Padang',
                'location'=>'3.588384, 98.681434',
            ],
        ]);
    }
}
