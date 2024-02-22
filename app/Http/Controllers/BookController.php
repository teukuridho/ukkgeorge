<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BookController extends Controller
{
    public function books($keyword = null) {
        // gets user
        $user = auth()->user();

        // gets books
        $books = Buku::orderBy('created_at', 'DESC')->get()->map(function($book) {
            if(!empty($book->filename)) {
                $book->cover = Storage::url($book->filename);
            }

            return $book;
        });

        // returns
        return Inertia::render('Home/BooksPage', [
            "user" => $user,
            "books" => $books,
            "keyword" => $keyword
        ]);
    }

    public function bookDetails($bookId) {
        // gets user
        $user = auth()->user();

        // gets book
        $book = Buku::where('BukuId', $bookId)->first();

        // ensure book exists
        if(empty($book)) {
            return response()->redirectToRoute('book.list');
        }

        // fills cover
        if(!empty($book->filename)) {
            $book->cover = Storage::url($book->filename);
        };

        return Inertia::render('Home/BookDetailsPage', [
            "user" => $user,
            "book" => $book
        ]);
    }

    public function borrowedBooks() {
        // gets user
        $user = auth()->user();

        // gets borrowed books
        $borrowedBooks = Peminjaman::where('UserId', $user->UserId)->get()->map(function($borrows) {
            // gets book
            $book = $borrows->book;

            // fills cover
            if(!empty($book->filename)) {
                $book->cover = Storage::url($book->filename);
            };

            // returns
            return $book;
        });

        // returns
        return Inertia::render('Home/BorrowedBooksPage', [
            'user' => $user,
            'borrowedBooks' => $borrowedBooks
        ]);

    }
}
