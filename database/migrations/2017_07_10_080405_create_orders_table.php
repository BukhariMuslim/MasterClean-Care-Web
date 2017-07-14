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
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->integer('province')->unsigned();
            $table->integer('city')->unsigned();
            $table->string('address');
            $table->string('location')->nullable();
            $table->string('remark')->nullable();
            $table->integer('status');
            $table->timestamps();

            $table->foreign('member_id')
                  ->references('id')->on('users');
            $table->foreign('art_id')
                  ->references('id')->on('users');
            $table->foreign('work_time_id')
                  ->references('id')->on('work_times');
            $table->foreign('province')
                  ->references('id')->on('places');
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
        Schema::dropIfExists('orders');
    }
}
