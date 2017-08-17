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
                'order_id' => 1,
                'phone' => '081234432165',
                'city' => 2,
                'address' => 'Jl. Riau',
                'location' => '3.587870, 98.702205'
            ],
            [
                'order_id'=>2,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>3,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>4,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>5,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>6,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>7,
                'phone' => '0888888888',
                'city' => 2,
                'address' => 'Jl. Sana',
                'location' => '3.605688, 98.707355',
            ],
            [
                'order_id'=>8,
                'phone' => '0888888888',
                'city' => 2,
                'address' => 'Jl. Sana',
                'location' => '3.605688, 98.707355',
            ],
            [
                'order_id'=>9,
                'phone' => '0888888888',
                'city' => 2,
                'address' => 'Jl. Sana',
                'location' => '3.605688, 98.707355',
            ],
            [
                'order_id'=>10,
                'phone' => '0888888888',
                'city' => 2,
                'address' => 'Jl. Sana',
                'location' => '3.605688, 98.707355',
            ],
            [
                'order_id'=>11,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>12,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>13,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>14,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
            [
                'order_id'=>15,
                'phone' => '082168360303',
                'city' => 2,
                'address' => 'Jl.Denai no47c',
                'location' => '3.595237, 98.652423'
            ],
        ]);
    }
}
