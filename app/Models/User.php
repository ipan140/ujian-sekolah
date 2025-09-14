<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Kolom yang bisa diisi secara mass assignment.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'school_id',   // opsional, kalau memang ada relasi sekolah
        'name',
        'email',
        'password',
    ];

    /**
     * Kolom yang harus disembunyikan saat serialisasi JSON.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Casting atribut agar otomatis dikonversi.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password'          => 'hashed', // Laravel 10+ support auto hash
    ];
}
