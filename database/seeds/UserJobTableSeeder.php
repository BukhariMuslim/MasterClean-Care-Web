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
            [
                'user_id' => 11,
                'job_id' => 1,
            ],
            [
                'user_id' => 11,
                'job_id' => 2,
            ],
            [
                'user_id' => 11,
                'job_id' => 3,
            ],
            [
                'user_id' => 11,
                'job_id' => 4,
            ],
            [
                'user_id' => 12,
                'job_id' => 1,
            ],
            [
                'user_id' => 12,
                'job_id' => 2,
            ],
            [
                'user_id' => 12,
                'job_id' => 3,
            ],
            [
                'user_id' => 12,
                'job_id' => 4,
            ],
            [
                'user_id' => 13,
                'job_id' => 2,
            ],
            [
                'user_id' => 13,
                'job_id' => 3,
            ],
            [
                'user_id' => 13,
                'job_id' => 4,
            ],
            [
                'user_id' => 14,
                'job_id' => 1,
            ],
            [
                'user_id' => 14,
                'job_id' => 3,
            ],
            [
                'user_id' => 14,
                'job_id' => 4,
            ],
            [
                'user_id' => 15,
                'job_id' => 1,
            ],
            [
                'user_id' => 15,
                'job_id' => 2,
            ],
            [
                'user_id' => 15,
                'job_id' => 3,
            ],
            [
                'user_id' => 15,
                'job_id' => 4,
            ],
            [
                'user_id' => 16,
                'job_id' => 1,
            ],
            [
                'user_id' => 16,
                'job_id' => 2,
            ],
            [
                'user_id' => 16,
                'job_id' => 4,
            ],
            [
                'user_id' => 17,
                'job_id' => 2,
            ],
            [
                'user_id' => 17,
                'job_id' => 3,
            ],
            [
                'user_id' => 17,
                'job_id' => 4,
            ],
            [
                'user_id' => 18,
                'job_id' => 1,
            ],
            [
                'user_id' => 18,
                'job_id' => 2,
            ],
            [
                'user_id' => 18,
                'job_id' => 3,
            ],
            [
                'user_id' => 18,
                'job_id' => 4,
            ]
        ]);
    }
}
