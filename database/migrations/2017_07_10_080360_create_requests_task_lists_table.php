<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequestsTaskListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requests_task_lists', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('requests_id')->unsigned();
            $table->string('task');
            $table->integer('status');
            $table->timestamps();

            $table->foreign('requests_id')
                  ->references('id')->on('requests')
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
        Schema::dropIfExists('task_lists');
    }
}
