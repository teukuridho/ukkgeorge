import { router } from "@inertiajs/react";
import axios from "axios";
import React from "react";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
export default function BookCategories({categories}) {
    // 
    let i = 0;

    return (
        <div className="overflow-x-scroll w-full">
            <table className="min-w-[200px] w-full">
                <thead className="">
                    <tr className="">
                        <th>No</th>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(category => {
                            return (
                                <tr key={category.KategoriId}>
                                    <td>{++i}</td>
                                    <td>{category.NamaKategori}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}