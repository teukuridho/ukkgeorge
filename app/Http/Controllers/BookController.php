<?php

namespace App\Http\Controllers;

use App\Models\BookCollection;
use App\Models\Buku;
use App\Models\Peminjaman;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

        // gets borrow
        $borrow = null;
        if(!empty($user)) {
            $borrow = Peminjaman::where('UserId', Auth::user()?->UserId)->where('BukuId', $bookId)
            ->where('StatusPeminjaman', 'Diterima')
            ->first();
        }

        // gets reviews
        $reviews = Review::with(['user'])->where('BukuId', $bookId)->get();

        // fills cover
        if(!empty($book->filename)) {
            $book->cover = Storage::url($book->filename);
        };

        return Inertia::render('Home/BookDetailsPage', [
            "user" => $user,
            "book" => $book,
            "borrow" => $borrow,
            "reviews" => $reviews
        ]);
    }

    public function borrowedBooks() {
        // gets user
        $user = auth()->user();

        // gets borrowed books
        $borrowedBooks = Peminjaman::where('UserId', $user->UserId)
            ->where('StatusPeminjaman', 'Diterima')
            ->get()
            ->map(function($borrows) {
                // gets book
                $book = $borrows->book;

                // fills cover
                if(!empty($book->filename)) {
                    $book->cover = Storage::url($book->filename);
                };

                // returns
                return $book;
            }
        );

        // returns
        return Inertia::render('Home/BorrowedBooksPage', [
            'user' => $user,
            'borrowedBooks' => $borrowedBooks
        ]);

    }

    public function collection() {
        // gets user
        $user = auth()->user();

        // gets collections by user id
        $collection = BookCollection::with(['book'])->where('UserId', $user->UserId)->get()->map(function($item) {
            if(!empty($item->book->filename)) {
                $item->book->cover = Storage::url($item->book->filename);
            }
            return $item->book;
        });

        // renders
        return Inertia::render('Home/BookCollectionsPage', [
            'user' => $user,
            'collection' => $collection
        ]);
    }
}
