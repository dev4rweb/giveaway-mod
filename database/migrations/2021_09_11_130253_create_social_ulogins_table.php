<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialUloginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_ulogins', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('network')->nullable();
            $table->string('profile')->nullable();
            $table->string('uid')->nullable();
            $table->string('identity')->nullable();
            $table->string('manual')->nullable();
            $table->string('verified_email')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->nullable();
            $table->string('nickname')->nullable();
            $table->string('bdate')->nullable();
            $table->string('sex')->nullable();
            $table->string('phone')->nullable();
            $table->string('photo')->nullable();
            $table->string('photo_big')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
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
        Schema::dropIfExists('social_ulogins');
    }
}
