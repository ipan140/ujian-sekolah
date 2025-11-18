<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();

            // Relasi ke exam
            $table->foreignId('exam_id')->constrained('exams')->cascadeOnDelete();

            $table->text('question');

            // Pilihan jawaban
            $table->string('option_a');
            $table->string('option_b');
            $table->string('option_c')->nullable();
            $table->string('option_d')->nullable();

            // Jawaban benar
            $table->enum('correct_answer', ['a', 'b', 'c', 'd']);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
