import { Link } from "@inertiajs/react"
import React from "react"
export default function SecondaryButton({text, onClick, link}) {
    return <div className="button secondary-button" onClick={onClick}>
        {
            link == null ? 
            text : 
            <Link href={link}>{text}</Link>
        }
    </div>  
}