import React from "react";
export default function Users() {
    return (
        <div className="overflow-x-scroll w-full bg-red-500">
            <table className="min-w-[200px] w-full">
                <thead className="">
                    <tr className="">
                        <th>No</th>
                        <th>Username</th>
                        <th>Tipe User</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>petugas1</td>
                        <td>Petugas</td>
                        <td>
                            <button type="button">
                                <svg class="w-7 h-7 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>petugas1</td>
                        <td>Petugas</td>
                        <td>
                            <button type="button">
                                <svg class="w-7 h-7 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}