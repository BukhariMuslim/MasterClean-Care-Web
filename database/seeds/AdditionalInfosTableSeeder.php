<?php

use Illuminate\Database\Seeder;

class AdditionalInfosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('additional_infos')->insert([
            [
                'info' => 'Takut Anjing',
            ],
        ]);
    }
}
