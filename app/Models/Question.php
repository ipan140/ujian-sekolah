<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id',
        'question_text',
        'options',       // disimpan JSON → ["A", "B", "C", "D"]
        'answer_index',  // integer index jawaban benar
    ];

    protected $casts = [
        'options' => 'array', // biar otomatis jadi array di Laravel
    ];

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }
}
