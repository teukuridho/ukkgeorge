import { Link } from "@inertiajs/react"
import React from "react"
export default function PrimaryButton({text, style, onClick, link}) {
    return <Link href={link}>
        <div className="button primary-button" onClick={onClick}>
            {text}
        </div>
    </Link>
}