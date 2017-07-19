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
            [
                'user_id' => 2,
                'document_name' => 'doc1',
                'document_path' => '',
                'document_type' => 1,
                'experience' => 0,
            ],
            [
                'user_id' => 3,
                'document_name' => 'doc2',
                'document_path' => '',
                'document_type' => 2,
                'experience' => 1,
            ],
        ]);
    }
}
