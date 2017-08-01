<?php

use Illuminate\Database\Seeder;

class WorkTimesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('work_times')->insert([
            [
                'work_time' => 'Per Jam',
            ],
            [
                'work_time' => 'Harian',
            ],
            [
                'work_time' => 'Bulanan',
            ],
        ]);
    }
}
