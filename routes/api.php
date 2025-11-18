<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ExamResultController;

// ======================
// PUBLIC ROUTES
// ======================

Route::get(
    '/test-api',
    fn() =>
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
    Route::get('/exams', [ExamController::class, 'index']);
    Route::post('/exams', [ExamController::class, 'store']);
    Route::get('/exams/{exam}', [ExamController::class, 'show']);
    Route::put('/exams/{exam}', [ExamController::class, 'update']);
    Route::delete('/exams/{exam}', [ExamController::class, 'destroy']);

    Route::get('/exams/{id}/questions', [ExamController::class, 'getQuestions']);
});
