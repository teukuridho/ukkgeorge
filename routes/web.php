<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/', [HomeController::class, "index"]);

// Auths
Route::get('auth/sign-in', [AuthController::class, "signIn"])->name('auth.login');
Route::get('auth/sign-up', [AuthController::class, "signUp"])->name('auth.register');

Route::get('ajg', function () {
    echo "ajg";
});