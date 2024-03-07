import React from "react";
import BookPageLayout from "../Layouts/BookPageLayout";
import Books from "../../Components/BookPage/Books";
export default function BookCollectionsPage({user, collection}) {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    console.log(collection);
    return (
        <BookPageLayout user={user}>
            <h3 className="mb-5 text-2xl font-semibold">Koleksi Buku</h3>
            <Books books={collection} baseUrl={`${baseUrl}/book/details`}/>
        </BookPageLayout>
    )
}