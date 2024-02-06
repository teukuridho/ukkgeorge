import React from "react";
import BookPageLayout from "./Layouts/BookPageLayout";
import SiteTitle from "../Components/Shared/SiteTitle";
import Books from "../Components/BookPage/Books";
export default function BooksPage() {
    return <BookPageLayout>
        <Books className="mt-5 sm:mt-10"/>
    </BookPageLayout>
}