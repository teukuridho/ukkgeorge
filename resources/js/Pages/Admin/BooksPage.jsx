import React from "react";
import BookPageLayout from "../Layouts/BookPageLayout";
import SiteTitle from "../../Components/Shared/SiteTitle";
import Books from "../../Components/BookPage/Books";
import AdminPageLayout from "../Layouts/AdminPageLayout";
export default function BooksPage() {
    return <AdminPageLayout>
        <Books className="mt-5 sm:mt-10"/>
    </AdminPageLayout>
}