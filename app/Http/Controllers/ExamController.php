<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;

class ExamController extends Controller
{
    /**
     * GET /api/exams
     * Ambil semua ujian
     */
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'data'   => Exam::all()
        ]);
    }

    /**
     * GET /api/exams/{exam}
     * Detail ujian (pakai route model binding)
     */
    public function show(Exam $exam)
    {
        return response()->json([
            'status' => 'success',
            'data'   => $exam
        ]);
    }

    /**
     * POST /api/exams
     * Membuat ujian baru (hanya admin)
     */
    public function store(Request $request)
    {
        // Validasi dulu
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'duration'    => 'required|integer|min:1',
        ]);

        // Simpan
        $exam = Exam::create($validated);

        return response()->json([
            'status' => 'success',
            'data'   => $exam
        ], 201);
    }
}
