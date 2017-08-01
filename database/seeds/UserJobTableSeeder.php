<?php

use Illuminate\Database\Seeder;

class UserJobTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_jobs')->insert([
            [
                'user_id' => 2,
                'job_id' => 1,
            ],
            [
                'user_id' => 2,
                'job_id' => 2,
            ],
            [
                'user_id' => 3,
                'job_id' => 1,
            ],
            [
                'user_id' => 3,
                'job_id' => 3,
            ],
            [
                'user_id' => 4,
                'job_id' => 1,
            ],
            [
                'user_id' => 7,
                'job_id' => 1,
            ],
            [
                'user_id' => 7,
                'job_id' => 2,
            ],
            [
                'user_id' => 7,
                'job_id' => 3,
            ],
            [
                'user_id' => 8,
                'job_id' => 2,
            ],
            [
                'user_id' => 8,
                'job_id' => 3,
            ],
        ]);
    }
}
