<?php

namespace App\Http\Controllers;

use App\Models\ExamResult;
use App\Models\Question;
use Illuminate\Http\Request;

class ExamResultController extends Controller
{
    // POST /api/exams/{id}/submit
    public function store(Request $request, $examId)
    {
        $answers = $request->input('answers', []); // array: question_id => choice_index
        $userId  = $request->input('user_id');

        $questions = Question::where('exam_id', $examId)->get();

        $score = 0;
        $total = $questions->count();

        foreach ($questions as $q) {
            if (isset($answers[$q->id]) && $answers[$q->id] == $q->answer_index) {
                $score++;
            }
        }

        $result = ExamResult::create([
            'user_id' => $userId,
            'exam_id' => $examId,
            'score'   => $score,
            'total'   => $total,
            'answers' => json_encode($answers),
        ]);

        return response()->json([
            'message' => 'Exam submitted successfully',
            'result'  => $result
        ]);
    }

    // GET /api/users/{id}/results
    public function userResults($userId)
    {
        $results = ExamResult::where('user_id', $userId)->get();
        return response()->json($results);
    }
}
