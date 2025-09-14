<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;

class ExamController extends Controller
{
    // GET /api/exams
    public function index()
    {
        return response()->json(Exam::all());
    }

    // GET /api/exams/{id}
    public function show($id)
    {
        $exam = Exam::findOrFail($id);
        return response()->json($exam);
    }

    // POST /api/exams (opsional, kalau admin mau tambah ujian)
    public function store(Request $request)
    {
        $exam = Exam::create($request->all());
        return response()->json($exam, 201);
    }
}
