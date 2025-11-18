<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Exam;

class QuestionController extends Controller
{
    // GET /api/exams/{exam}/questions
    public function index(Exam $exam)
    {
        $questions = Question::where('exam_id', $exam->id)->get();

        return response()->json([
            'status' => 'success',
            'exam_id' => $exam->id,
            'data' => $questions
        ]);
    }
}
