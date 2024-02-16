<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function books() {
        return Inertia::render('Admin/BooksPage');
    }

    public function bookDetails() {
        return Inertia::render('Admin/BookDetailsPage');
    }
}
