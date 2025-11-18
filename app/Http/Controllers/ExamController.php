<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;

class ExamController extends Controller
{
    /**
     * GET /api/exams
     * Menampilkan semua ujian
     */
    public function index()
    {
        return response()->json([
            'status' => true,
            'message' => 'List of exams',
            'data' => Exam::all()
        ]);
    }

    /**
     * GET /api/exams/{exam}
     * Menampilkan detail ujian
     */
    public function show(Exam $exam)
    {
        return response()->json([
            'status' => true,
            'message' => 'Exam detail',
            'data' => $exam
        ]);
    }

    /**
     * POST /api/exams
     * Membuat ujian baru
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'duration'    => 'required|integer|min:1',
        ]);

        $exam = Exam::create($validated);

        return response()->json([
            'status' => true,
            'message' => 'Exam created successfully',
            'data' => $exam
        ], 201);
    }

    /**
     * PUT /api/exams/{exam}
     * Update ujian
     */
    public function update(Request $request, Exam $exam)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'duration'    => 'required|integer|min:1',
        ]);

        $exam->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Exam updated successfully',
            'data' => $exam
        ]);
    }

    /**
     * DELETE /api/exams/{exam}
     * Menghapus ujian
     */
    public function destroy(Exam $exam)
    {
        $exam->delete();

        return response()->json([
            'status' => true,
            'message' => 'Exam deleted successfully'
        ]);
    }

    /**
     * GET /api/exams/{id}/questions
     * Ambil semua soal milik ujian
     */
    public function getQuestions($id)
    {
        $exam = Exam::findOrFail($id);

        return response()->json([
            'status' => true,
            'message' => 'Exam questions loaded',
            'exam' => $exam,
            'questions' => $exam->questions // pastikan relasinya sudah dibuat
        ]);
    }
}
