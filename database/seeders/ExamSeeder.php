<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Exam;

class ExamSeeder extends Seeder
{
    public function run(): void
    {
        Exam::updateOrCreate(
            ['category' => 'bahasa_inggris'],
            [
                'title' => 'English Exam',
                'grade' => 'SMA',
                'duration' => 120
            ]
        );

        Exam::updateOrCreate(
            ['category' => 'matematika'],
            [
                'title' => 'Mathematics Exam',
                'grade' => 'SMA',
                'duration' => 120
            ]
        );

        Exam::updateOrCreate(
            ['category' => 'ipa'],
            [
                'title' => 'IPA Exam',
                'grade' => 'SMA',
                'duration' => 120
            ]
        );

        Exam::updateOrCreate(
            ['category' => 'ips'],
            [
                'title' => 'IPS Exam',
                'grade' => 'SMA',
                'duration' => 120
            ]
        );
    }
}
