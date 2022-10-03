<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::factory()->create([
            'name' => 'Nikodem',
            'isAdmin' => true,
            'email' => 'admin@source-byte.com',
            'password' => \bcrypt('qa9h6`dNWNd{J#rd'),
        ]);
        /*User::factory()->create([
            'name' => 'Nikodem',
            'isAdmin' => false,
            'email' => 'nikodem@source-byte.com',
            'password' => \bcrypt('qa9h6`dNWNd{J#rd'),
        ]);*/

        User::factory(20)->create([
            'isAdmin' => false,
            'password' => \bcrypt('password')
        ]);

        $this->call(GameSeeder::class);
        $this->call(UserGameSeeder::class);
        $this->call(GiftSeeder::class);
        $this->call(TaskSeeder::class);
        $this->call(FaqPageSeeder::class);
        $this->call(WinnerSeeder::class);
    }
}
