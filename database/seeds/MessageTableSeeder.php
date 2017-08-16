<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

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
                'sender_id' => 2,
            
                'receiver_id' => 15,
            
                'subject' => 'Lorem Ipsum',
            
                'message' => 'Lorem Ipsum is simply dummy text',

                'status_member' => 1,

                'status_art' => 0,

                'created_at' => Carbon::create('2017', '07', '19', '08', '0', '0')
            ],
            [
                'sender_id' => 2,
            
                'receiver_id' => 15,
            
                'subject' => 'Lorem Ipsum',
            
                'message' => 'Lorem Ipsum is simply dummy text',

                'status_member' => 1,

                'status_art' => 0,

                'created_at' => Carbon::create('2017', '07', '19', '08', '0', '0')
            ],
            [
                'sender_id' => 2,
            
                'receiver_id' => 15,
            
                'subject' => 'Lorem Ipsum',
            
                'message' => 'Lorem Ipsum is simply dummy text',

                'status_member' => 1,

                'status_art' => 0,

                'created_at' => Carbon::create('2017', '07', '19', '09', '0', '0')
            ],
            [
                'sender_id' => 15,
                        
                'receiver_id' => 2,

                'subject' => 'Lorem Ipsum dari 2 ke 1',        
                
                'message' => 'Lorem Ipsum is simply dummy text',

                'status_member' => 0,
                
                'status_art' => 1,
                
                'created_at' => Carbon::create('2017', '07', '19', '09', '0', '0')
            ],
            [
                'sender_id' => 15,
                        
                'receiver_id' => 2,

                'subject' => 'Lorem Ipsum dari 2 ke 1',        
                
                'message' => 'Lorem Ipsum is simply dummy text',

                'status_member' => 0,
                
                'status_art' => 1,
                
                'created_at' => Carbon::create('2017', '07', '19', '09', '0', '0')
            ],
            [
                'sender_id' => 15,
                        
                'receiver_id' => 2,

                'subject' => 'Lorem Ipsum dari 2 ke 1',        
                
                'message' => 'Lorem Ipsum is simply dummy text',

                'status_member' => 0,
                
                'status_art' => 1,
                
                'created_at' => Carbon::create('2017', '07', '19', '09', '0', '0')
            ],
        ]);
    }
}
