<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOfferTaskListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_task_lists', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('offer_id')->unsigned();
            $table->integer('task_list_id')->unsigned();
            $table->integer('status');
            $table->timestamps();

            $table->foreign('offer_id')
                  ->references('id')->on('offers')
                  ->onDelete('cascade');
            $table->foreign('task_list_id')
                  ->references('id')->on('task_lists')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offer_task_lists');
    }
}
