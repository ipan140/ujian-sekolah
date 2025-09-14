<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ExamResultController;

// ======================
// AUTH ROUTES (Public)
// ======================

Route::get('/test-api', function () {
    return response()->json(['status' => 'API works']);
});
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// ===========================
// ROUTES DILINDUNGI SANCTUM
// ===========================
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/exams', [ExamController::class, 'index']);
    Route::get('/exams/{id}', [ExamController::class, 'show']);
    Route::post('/exams', [ExamController::class, 'store']);

    Route::get('/exams/{id}/questions', [QuestionController::class, 'index']);

    Route::post('/exams/{id}/submit', [ExamResultController::class, 'store']);
    Route::get('/users/{id}/results', [ExamResultController::class, 'userResults']);
});
