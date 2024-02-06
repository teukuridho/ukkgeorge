import React from "react";
import AuthPageLayout from "./Layouts/AuthPageLayout";
import SiteTitle from "../Components/Shared/SiteTitle";
import AuthTextInput from "../Components/AuthPage/AuthTextInput";
import AuthPasswordInput from "../Components/AuthPage/AuthPasswordInput";
import PrimaryButton from "../Components/Shared/PrimaryButton";
import { Link } from "@inertiajs/react";
export default function RegisterPage() {
    return <AuthPageLayout>
        <SiteTitle/>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "10px",
            marginTop: "10px"
            }} >
            <AuthTextInput text="Fullname"/>
            <AuthTextInput text="Email"/>
            <AuthPasswordInput text="Password"/>
            <AuthPasswordInput text="Confirm Password"/>
        </div>
        <div style={{
            marginTop: "10px"
        }}>
            <p style={{color: 'white', textAlign: 'center'}} className="small-text">Sudah punya akun? <Link replace href="sign-in"><span className="link">Masuk</span></Link></p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <PrimaryButton style={{
                width: '100px'
            }} text="Sign Up"/>
        </div>
    </AuthPageLayout>
}