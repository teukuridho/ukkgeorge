<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function books() {
        return Inertia::render('BooksPage');
    }

    public function bookDetails() {

    }
}
