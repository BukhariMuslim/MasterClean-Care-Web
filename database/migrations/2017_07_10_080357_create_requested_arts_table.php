<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequestedArtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requested_arts', function (Blueprint $table) {
            $table->integer('requests_id')->unsigned();
            $table->integer('art_id')->unsigned();
            $table->integer('status');
            $table->timestamps();

            $table->foreign('request_id')
                  ->references('id')->on('requests');

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
        Schema::dropIfExists('requested_arts');
    }
}
