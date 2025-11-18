<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ExamResultController;

// ======================
// PUBLIC ROUTES
// ======================

Route::get('/test-api', fn () =>
    response()->json(['status' => 'API works'])
);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// ===========================
// PROTECTED ROUTES (SANCTUM)
// ===========================
Route::middleware('auth:sanctum')->group(function () {

    // AUTH
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // EXAM
    Route::get('/exams', [ExamController::class, 'index']);       // Semua ujian
    Route::post('/exams', [ExamController::class, 'store']);      // Buat ujian
    Route::get('/exams/{exam}', [ExamController::class, 'show']); // Detail ujian

    // QUESTION BY EXAM
    Route::get('/exams/{exam}/questions', [QuestionController::class, 'index']);

    // SUBMIT EXAM RESULT
    Route::post('/exams/{exam}/submit', [ExamResultController::class, 'store']);

    // USER RESULT HISTORY
    Route::get('/users/{user}/results', [ExamResultController::class, 'userResults']);
});
