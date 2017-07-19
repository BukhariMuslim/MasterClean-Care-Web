<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
            [
                'user_id'=>1,
                'title'=>'Teknik Menyapu Lantai',
                'tag'=>'ART',
                'published_date'=>Carbon::create('2017', '07', '19', '12', '0', '0'),
                'content'=>'Sediakan sapu / floor broom sebelum melakukan sweeping. Angkat /pindahkan semua benda yang dari perabot yang akan dibersihkan. Dustinglah perabot yang ada di area sebelum dilakukan sweeping. Lakukan Sweeping dari arah terjauh dari pintu menuju area yang terdekat dengan pintu keluar. Angkat sampah dengan menggunakan dustpen setelah terkumpul',
            ],
            [
                'user_id'=>2,
                'title'=>'Teknik Mengepel Lantai',
                'tag'=>'ART',
                'published_date'=>Carbon::create('2017', '07', '19', '12', '0', '0'),
                'content'=>'Mengepel lantai (Mopping) adalah metode pembersihan terhadap lantai dengan menggunakan mop (alat pel). ',
            ],
            [
                'user_id'=>3,
                'title'=>'Teknik Mencuci piring',
                'tag'=>'ART',
                'published_date'=>Carbon::create('2017', '07', '19', '12', '0', '0'),
                'content'=>'',
                
            ],
            [

                'user_id'=>4,
                'title'=>'Teknik Menyetrika Pakaian',
                'tag'=>'ART',
                'published_date'=>Carbon::create('2017', '07', '19', '12', '0', '0'),
                'content'=>'',
            ],


        ]);
    }
}
