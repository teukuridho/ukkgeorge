import React from "react";
import AdminPageLayout from "../Layouts/AdminPageLayout";
import PrimaryButton from "../../Components/Shared/PrimaryButton";
import BookCover from "../../Components/AdminPage/BookCover";
export default function BookDetailsPage() {
    return (
        <AdminPageLayout>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="col-start-1 lg:col-start-2">
                    <h3 className="font-semibold text-xl">Tambah Buku</h3>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="">
                    <div className="max-h-96 aspect-[2/3]">
                        <BookCover/>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <form>
                        <div className="space-y-4">
                            <input type="text" placeholder="Nama Buku" className="my-input"/>
                            <input type="text" placeholder="Penulis" className="my-input"/>
                            <textarea className="my-input !h-56 !mb-0" placeholder="Sinopsis">
                            </textarea>
                            <input type="text" placeholder="Penerbit" className="my-input"/>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Jumlah Halaman" className="my-input"/>
                                <input type="text" placeholder="Tahun Terbit" className="my-input"/>
                                <input type="text" placeholder="Bahasa" className="my-input"/>
                                <input type="text" placeholder="Kategori" className="my-input"/>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-start">
                            <PrimaryButton>
                                Tambahkan Buku
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AdminPageLayout>
    )
}