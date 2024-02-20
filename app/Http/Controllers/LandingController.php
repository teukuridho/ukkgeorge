<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
// use Illuminate\Support\Facades\Storage;

class LandingController extends Controller
{
    public function index() {
        // $xd = Storage::disk('public')->put('wew.txt', 'wtf');
        // $xd = Storage::url('wew.txt');
        // // $files = Storage::disk('ftp')->files("/");
        // dd($xd);

        return Inertia::render('Home/LandingPage');
    }
}
