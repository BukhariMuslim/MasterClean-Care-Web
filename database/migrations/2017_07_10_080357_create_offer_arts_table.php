<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOfferArtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_arts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('offer_id')->unsigned();
            $table->integer('art_id')->unsigned();
            $table->integer('status');
            $table->timestamps();

            $table->foreign('offer_id')
                  ->references('id')->on('offers');

            $table->foreign('art_id')
                  ->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offer_arts');
    }
}
