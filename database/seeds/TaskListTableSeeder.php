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
                'task' => 'Bedroom Cleaning',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Bathroom Cleaning',
                'point' => 10,
            ],
            [
                'job_id' => 1,
                'task' => 'Other Room',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Ironing and folding',
                'point' => 10,
            ],
            [
                'job_id' => 1,
                'task' => 'Dish Washing',
                'point' => 10,
            ],
            [
                'job_id' => 1,
                'task' => 'Cabinet',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Fridge',
                'point' => 5,
            ],
            [
                'job_id' => 1,
                'task' => 'Kitchen Set',
                'point' => 10,
            ],
            [
                'job_id' => 1,
                'task' => 'Stove',
                'point' => 5,
            ],
            [
                'job_id' => 2,
                'task' => 'Care taking',
                'point' => 0,
            ],
            [
                'job_id' => 3,
                'task' => 'Babysitting',
                'point' => 0,
            ],
            [
                'job_id' => 4,
                'task' => 'Nanny',
                'point' => 0,
            ],
        ]);
    }
}
