import React from "react";
import AdminPageLayout from "./Layouts/AdminPageLayout";
import Books from "../Components/BookPage/Books";
export default function AdminBooksPage() {
    return (
        <AdminPageLayout>
            <Books/>
        </AdminPageLayout>
    );
}