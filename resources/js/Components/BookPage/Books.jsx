import React from "react";
import Book from "./Book";
export default function Books({books, baseUrl, className}) {
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-10 ${className}`}>
            {
                books.map(book => {
                    return (
                        <Book book={book} key={book.BukuId} link={`${baseUrl}/${book.BukuId}`}/>
                    )
                })
            }
            {
                books.length == 0 ? 
                    <p>Sedang kosong...</p>
                : <></>
            }
        </div>
    )
}