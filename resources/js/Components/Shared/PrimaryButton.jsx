import { Link } from "@inertiajs/react"
import React from "react"
export default function PrimaryButton({text, style, onClick, link}) {
    return <div className="button primary-button" onClick={onClick}>
        {
            link == null ? 
            text : 
            <Link href={link}>{text}</Link>
        }
    </div>  
}