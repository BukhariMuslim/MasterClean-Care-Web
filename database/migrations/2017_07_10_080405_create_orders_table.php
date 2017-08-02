<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('member_id')->unsigned();
            $table->integer('art_id')->unsigned();
            $table->integer('work_time_id')->unsigned();
            $table->integer('job_id')->unsigned();
            $table->decimal('cost', 18, 2);
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('remark', 200)->nullable()->default('');
            $table->tinyInteger('status')->comment('0: pending, 1: selesai, 2: batal/tolak ');
            $table->tinyInteger('status_member')->comment('0: pending, 1: selesai, 2: batal/tolak ');
            $table->tinyInteger('status_art')->comment('0: pending, 1: selesai, 2: batal/tolak ');
            $table->timestamps();

            $table->foreign('member_id')
                  ->references('id')->on('users');
            $table->foreign('art_id')
                  ->references('id')->on('users');
            $table->foreign('work_time_id')
                  ->references('id')->on('work_times');
            $table->foreign('job_id')
                  ->references('id')->on('jobs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
