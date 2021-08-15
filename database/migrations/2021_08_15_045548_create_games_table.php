<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->boolean('isCompetition')->default(false);
            $table->integer('startDate');
            $table->integer('endDate');
            $table->string('mainImage')->default('/images/bg-main.png');
            $table->string('secondaryImage')->default('/images/gameOne.png');
            $table->string('leftImage')->default('/images/gameOne.png');
            $table->string('rightImage')->default('/images/gameOne.png');
            $table->string('isFavorite')->default(true);
            $table->string('isSponsored')->default(false);
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
        Schema::dropIfExists('games');
    }
}
