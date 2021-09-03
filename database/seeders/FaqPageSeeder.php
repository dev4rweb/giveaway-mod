<?php

namespace Database\Seeders;

use App\Models\FaqPage;
use Illuminate\Database\Seeder;

class FaqPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FaqPage::factory()->count(5)->create();
    }
}
