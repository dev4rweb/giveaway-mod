<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Game::factory()->count(1)->create([
            'isSponsored' => true,
            'mainImage' => '/images/sponsor-game.png'
        ]);

        Game::factory()->count(7)->create([
            'isCompetition' => true,
            'isFavorite' => false,
        ]);

        Game::factory()->count(8)->create([
            'isCompetition' => false,
            'isFavorite' => false
        ]);

        Game::factory()->count(1)->create([
            'isCompetition' => false,
            'isFavorite' => false,
            'status' => 1,
            'winner_id' => 2
        ]);

        Game::factory()->count(10)->create([
            'isCompetition' => true,
        ]);

        Game::factory()->count(9)->create([
            'isCompetition' => false,
        ]);
    }
}
