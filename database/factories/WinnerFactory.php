<?php

namespace Database\Factories;

use App\Models\Winner;
use Illuminate\Database\Eloquent\Factories\Factory;

class WinnerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Winner::class;

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