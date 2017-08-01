<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOfferContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('offer_id')->unsigned();
            $table->string('phone');
            $table->integer('city')->unsigned();
            $table->string('address')->nullable();
            $table->string('location')->nullable();
            $table->timestamps();

            $table->foreign('offer_id')
                  ->references('id')->on('offers')
                  ->onDelete('cascade');
            $table->foreign('city')
                  ->references('id')->on('places');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offer_contacts');
    }
}
