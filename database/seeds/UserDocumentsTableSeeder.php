<?php

use Illuminate\Database\Seeder;

class UserDocumentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_documents')->insert([
        ]);
    }
}
