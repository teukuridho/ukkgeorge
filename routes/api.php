<?php

use App\Http\Controllers\Api\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Authentication
Route::post('auth/sign-up', [AuthService::class, "signUp"]);
Route::post('auth/sign-in', [AuthService::class, "signIn"]);

// Protecected routes
Route::group(['middleware' => ['auth:sanctum']], function() {
    
});