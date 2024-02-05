<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        // dd(env('APP_URL'));
        return Inertia::render('LandingPage');
    }
}
