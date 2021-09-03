<?php

namespace Database\Factories;

use App\Models\FaqPage;
use Illuminate\Database\Eloquent\Factories\Factory;

class FaqPageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FaqPage::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'=> $this->faker->words(9, true),
            'content' => $this->faker->words(100, true)
        ];
    }
}
