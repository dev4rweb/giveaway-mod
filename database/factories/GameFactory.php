<?php

namespace Database\Factories;

use App\Models\Game;
use Illuminate\Database\Eloquent\Factories\Factory;

class GameFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Game::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->words(2, true),
            'description' => $this->faker->sentence(30),
            'status' => $this->faker->numberBetween(0, 3),
            'startDate' => $this->faker->numberBetween( 1629011412,1630221012),
            'endDate' => $this->faker->numberBetween( 1629011412,1630221012),
        ];
    }
}
