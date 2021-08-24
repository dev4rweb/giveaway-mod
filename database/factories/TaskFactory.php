<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'game_id' => $this->faker->numberBetween(1, 35),
            'taskTypeId' => $this->faker->numberBetween(1, 22),
            'task'=> 'task',
            'url' =>$this->faker->domainName,
        ];
    }
}
