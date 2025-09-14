<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ExamController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ExamResultController;

Route::get('/exams', [ExamController::class, 'index']);
Route::get('/exams/{id}', [ExamController::class, 'show']);
Route::post('/exams', [ExamController::class, 'store']);

Route::get('/exams/{id}/questions', [QuestionController::class, 'index']);

Route::post('/exams/{id}/submit', [ExamResultController::class, 'store']);
Route::get('/users/{id}/results', [ExamResultController::class, 'userResults']);
