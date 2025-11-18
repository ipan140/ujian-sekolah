<?php

namespace App\Http\Controllers;

use App\Models\ExamResult;
use App\Models\Question;
use App\Models\Exam;
use Illuminate\Http\Request;

class ExamResultController extends Controller
{
    // POST /api/exams/{exam}/submit
    public function store(Request $request, Exam $exam)
    {
        $answers = $request->input('answers', []); 
        $userId  = $request->user()->id;

        // Ambil semua soal berdasarkan exam
        $questions = Question::where('exam_id', $exam->id)->get();

        $score = 0;
        $total = $questions->count();

        // Hitung skor
        foreach ($questions as $q) {
            if (isset($answers[$q->id]) && $answers[$q->id] == $q->correct_answer) {
                $score++;
            }
        }

        // Simpan hasil ujian
        $result = ExamResult::create([
            'user_id'  => $userId,
            'exam_id'  => $exam->id,
            'score'    => $score,
        ]);

        return response()->json([
            'message' => 'Exam submitted successfully',
            'total'   => $total,
            'score'   => $score,
            'result'  => $result
        ]);
    }

    // GET /api/users/{user}/results
    public function userResults($userId)
    {
        $results = ExamResult::where('user_id', $userId)
                             ->with('exam')
                             ->get();

        return response()->json($results);
    }
}
