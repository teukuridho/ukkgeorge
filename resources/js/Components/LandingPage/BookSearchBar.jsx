import React, { useState } from "react";
export default function BookSearchBar() {
    const [text, useText] = useState("");

    // 
    const handleInput = (ev) => {
        const value = ev.target.value;
        useText(value);
    }

    return (
        <input onInput={handleInput} type="text" className="book-search-bar" placeholder="Search Books" value={text}/>
    );
}