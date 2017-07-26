<?php

use Illuminate\Database\Seeder;

class PlacesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('places')->insert([
            [
                'name' => 'Banda Aceh',
            ],
            [
                'name' => 'Medan',
            ],
            [
                'name' => 'Binjai',
            ],
            [
                'name' => 'Kab. Deli Serdang',
            ],
            [
                'name' => 'Kab. Langkat',
            ],
            [
                'name' => 'Kab. Asahan',
            ],
            [
                'name' => 'Padang',
            ],
            [
                'name' => 'Bukit Tinggi',
            ],
            [
                'name' => 'Pekanbaru',
            ],
        ]);
    }
}
