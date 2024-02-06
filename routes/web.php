<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Homes
Route::get('/', [LandingController::class, "index"])->name('home');

// Auths
Route::get('auth/sign-in', [AuthController::class, "signIn"])->name('auth.login');
Route::get('auth/sign-up', [AuthController::class, "signUp"])->name('auth.register');

// Book
Route::get('book/books/', [BookController::class, "books"])->name('book.books');