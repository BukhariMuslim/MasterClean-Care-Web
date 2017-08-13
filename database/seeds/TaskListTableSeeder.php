<?php

use Illuminate\Database\Seeder;

class TaskListTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('task_lists')->insert([
            [
                'job_id' => 1,
                'task' => 'Menyapu',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Mengepel',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Membersihkan Toilet',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Mencuci Piring',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Menyetrika dan Melipat Kain',
                'point' => 10,
            ],
            [
                'job_id' => 1,
                'task' => 'Membersihkan Lemari',
                'point' => 10,
            ],
            [
                'job_id' => 1,
                'task' => 'Membersihkan Kulkas',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Membersihkan Dapur',
                'point' => 10,
            ],
            [
                'job_id' => 2,
                'task' => 'Pengasuh Bayi',
                'point' => 0,
            ],
            [
                'job_id' => 3,
                'task' => 'Pengasuh Anak',
                'point' => 0,
            ],
            [
                'job_id' => 4,
                'task' => 'Pengurus Lansia',
                'point' => 0,
            ],
        ]);
    }
}
