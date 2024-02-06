import React from "react";
import Book from "./Book";
export default function Books({className}) {
    return (
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-10 ${className}`}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}