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
                'user_id'=>1,
                'document_name'=>'doc1',
                'document_path'=>'',
                'document_type'=>'',
                'experience'=>0,
            ],
            [
                'user_id'=>2,
                'document_name'=>'doc2',
                'document_path'=>'',
                'document_type'=>'',
                'experience'=>1,
            ],
        ]);
    }
}
