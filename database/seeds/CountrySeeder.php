<?php

use App\Models\Country;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::create([
            'name' => 'Россия',
            'sort' => 1,
            'visible' => 1,
            'external_id' => '79987-asdf32klh-asdf'
        ]);
        Country::create([
            'name' => 'США',
            'sort' => 100,
            'visible' => 1,
            'external_id' => '79987-as8okdklh-asdf'
        ]);
    }
}
