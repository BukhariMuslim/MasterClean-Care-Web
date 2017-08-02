<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('member_id')->unsigned();
            $table->integer('work_time_id')->unsigned();
            $table->integer('job_id')->unsigned();
            $table->decimal('cost', 18, 2);
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('remark')->nullable()->default('');
            $table->tinyInteger('status')->comment('0: pending, 1: diterima, 2: tolak/batal ');
            $table->timestamps();

            $table->foreign('member_id')
                  ->references('id')->on('users');
            $table->foreign('work_time_id')
                  ->references('id')->on('work_times');
            $table->foreign('jov_id')
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
        Schema::dropIfExists('offers');
    }
}
