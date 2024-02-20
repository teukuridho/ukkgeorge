import React from "react";
import PosterImage from "../../../images/poster.jpg";
import { Link } from "@inertiajs/react";
export default function Book({book, link}) {
    return (
        <Link href={link}>
            <div className="cursor-pointer rounded-md book bg-[#F2F2F2] p-2 sm:p-5">
                <div>
                    <img src={book.cover} className=""/>
                </div>
                <div className="mt-3">
                    <h3 className="text-sm text-[#818181]">{book.Penulis}</h3>
                    <h4 className="">{book.Judul}</h4>
                </div>
            </div>
        </Link>
    );
}