<?php

namespace Database\Factories;

use App\Models\UserGame;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserGameFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UserGame::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(2, 22),
            'game_id' => $this->faker->numberBetween(1, 35)
        ];
    }
}
