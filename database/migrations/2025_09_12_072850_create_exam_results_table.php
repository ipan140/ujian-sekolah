<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('exam_results', function (Blueprint $table) {
            $table->id();

            // Relasi ke user
            $table->foreignId('user_id')
                  ->constrained('users')
                  ->cascadeOnDelete();

            // Relasi ke ujian
            $table->foreignId('exam_id')
                  ->constrained('exams')
                  ->cascadeOnDelete();

            // Nilai akhir ujian
            $table->unsignedInteger('score')->default(0);

            // Waktu ujian dikerjakan
            $table->timestamp('taken_at')->useCurrent();

            $table->timestamps();

            // OPTIONAL (tapi sangat bagus):
            // user tidak boleh punya 2 hasil untuk ujian yang sama
            $table->unique(['user_id', 'exam_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exam_results');
    }
};
