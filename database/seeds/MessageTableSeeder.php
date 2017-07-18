<?php

use Illuminate\Database\Seeder;

class MessageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('messages')->insert([
            [
                'sender_id' => 1,
            
                'receiver_id' => 2,
            
                'subject' => 'Lorem Ipsum',
            
                'message' => 'Lorem Ipsum is simply dummy text',

                'status' => 1
            ],
            [
                'sender_id' => 2,
                        
                'receiver_id' => 1,

                'subject' => 'Lorem Ipsum dari 2 ke 1',        
                
                'message' => 'Lorem Ipsum is simply dummy text',

                'status' => 0              
            ],
        ]);
    }
}
