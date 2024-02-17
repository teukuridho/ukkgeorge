import React from "react";
import AdminPageLayout from "../Layouts/AdminPageLayout";
import Users from "../../Components/AdminPage/Users";
import PrimaryButton from "../../Components/Shared/PrimaryButton";
export default function UsersPage() {
    return (
        <AdminPageLayout>
            <div className="flex justify-end mb-5">
                <PrimaryButton>
                    Tambah Petugas
                </PrimaryButton>
            </div>
            <Users/>
        </AdminPageLayout>
    )
}