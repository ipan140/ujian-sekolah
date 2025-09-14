<?php

namespace App\Http\Controllers;

use App\Models\Question;

class QuestionController extends Controller
{
    // GET /api/exams/{id}/questions
    public function index($examId)
    {
        $questions = Question::where('exam_id', $examId)->get();
        return response()->json($questions);
    }
}
