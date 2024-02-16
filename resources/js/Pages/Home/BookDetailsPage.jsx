import React from "react";
import BookPageLayout from "../Layouts/BookPageLayout";
import PosterImage from "../../../images/poster-2.jpg"
import PrimaryButton from "../../Components/Shared/PrimaryButton";

export default function BookDetailPage() {
    return (
        <BookPageLayout>
            <div>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 mt-5">
                    <div className="basis-[50px] grow flex justify-center">
                        <img src={PosterImage} className=""/>
                    </div>
                    <div className="basis-[200px] grow-[3]">
                        <h4 className="text-[#818181] text-lg font-light">Sumanto</h4>
                        <h3 className="text-2xl text-black font-light">Senggol dong!</h3>
                        <h5 className="mt-4 text-lg">Deskripsi</h5>
                        <p className="mt-3 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat quam ut sodales condimentum. Nam tristique sollicitudin ipsum, nec sollicitudin magna aliquam non. Proin elementum leo ex, non ornare massa suscipit id. Donec rhoncus dolor vitae lorem placerat, eu laoreet orci rhoncus. Curabitur dignissim, nunc sit amet egestas tincidunt, nunc erat egestas ante, nec tincidunt mauris sapien sed nunc. Pellentesque non lacus sed dui condimentum mollis. Integer at dolor quis justo suscipit malesuada non at nulla. Vestibulum vel tortor tempus, semper ex vitae, pretium justo. Vivamus sed ipsum at justo efficitur tincidunt in ac ex. Suspendisse nibh dui, sodales vitae ante mollis, facilisis ultricies sem. Praesent sed suscipit quam, ut placerat arcu. Nulla sit amet odio velit. Pellentesque vitae dictum erat. Vivamus semper tincidunt mollis.</p>
                        <div className="mt-3">
                            <h5 className="mt-4 text-lg">Detail Buku</h5>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <div>
                                    <h6 className="text-[#464646]">Jumlah Halaman</h6>
                                    <p className="text-[#6A6A6A]">1854</p>
                                </div>
                                <div>
                                    <h6 className="text-[#464646]">Tanggal Terbit</h6>
                                    <p className="text-[#6A6A6A]">18 Oktober 2012</p>
                                </div>
                                <div>
                                    <h6 className="text-[#464646]">Bahasa</h6>
                                    <p className="text-[#6A6A6A]">Inggris</p>
                                </div>
                                <div>
                                    <h6 className="text-[#464646]">Penerbit</h6>
                                    <p className="text-[#6A6A6A]">Princeton</p>
                                </div>
                                <div>
                                    <h6 className="text-[#464646]">Kategori</h6>
                                    <p className="text-[#6A6A6A]">Fiksi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <PrimaryButton text="Pinjam Buku"/>
                </div>
            </div>
        </BookPageLayout>
    );
}