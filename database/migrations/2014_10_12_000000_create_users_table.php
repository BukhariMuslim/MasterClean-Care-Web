<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('role_id')->nullable()->default('');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('avatar')->nullable()->default('');
            $table->string('password');
            $table->tinyInteger('gender');
            $table->string('born_place');
            $table->date('born_date');
            $table->integer('religion');
            $table->string('race')->nullable()->default('');
            $table->string('description', 500)->nullable()->default('');
            $table->tinyInteger('status')->comment('0: inactive, 1: active ');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
