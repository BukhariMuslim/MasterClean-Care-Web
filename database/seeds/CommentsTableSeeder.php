<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([
            [
                'article_id'=>1,
                'user_id'=>1,
                'comment'=>'wisuda tahun ini',
            ],
            [
                'article_id'=>2,
                'user_id'=>2,
                'comment'=>'oktober 2017 wisuda',
            ],    
        ]);
    }
}
