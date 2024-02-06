import { Link } from "@inertiajs/react"
import React from "react"
export default function SecondaryButton({text, onClick, link}) {
    return <Link href={link} preserveState={true}>
        <div className="button secondary-button" onClick={onClick}>
            {text}
        </div>
    </Link>
}