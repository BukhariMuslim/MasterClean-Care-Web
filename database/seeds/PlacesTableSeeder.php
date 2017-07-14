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
                'name' => 'NAD',
                'parent' => 0,
            ],
            [
                'name' => 'Sumatera Utara',
                'parent' => 0,
            ],
            [
                'name' => 'Sumatera Barat',
                'parent' => 0,
            ],
            [
                'name' => 'Riau',
                'parent' => 0,
            ],
            [
                'name' => 'Banda Aceh',
                'parent' => 1,
            ],
            [
                'name' => 'Medan',
                'parent' => 2,
            ],
            [
                'name' => 'Binjai',
                'parent' => 2,
            ],
            [
                'name' => 'Kab. Deli Serdang',
                'parent' => 2,
            ],
            [
                'name' => 'Kab. Langkat',
                'parent' => 2,
            ],
            [
                'name' => 'Kab. Asahan',
                'parent' => 2,
            ],
            [
                'name' => 'Padang',
                'parent' => 3,
            ],
            [
                'name' => 'Bukit Tinggi',
                'parent' => 3,
            ],
            [
                'name' => 'Pekanbaru',
                'parent' => 4,
            ],
        ]);
    }
}
