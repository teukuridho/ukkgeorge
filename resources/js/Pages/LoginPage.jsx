import React from "react";
import AuthPageLayout from "./Layouts/AuthPageLayout";
import SiteTitle from "../Components/Shared/SiteTitle";
import AuthTextInput from "../Components/AuthPage/AuthTextInput";
import AuthPasswordInput from "../Components/AuthPage/AuthPasswordInput";
import PrimaryButton from "../Components/Shared/PrimaryButton";
import { Link } from "@inertiajs/react";
export default function LoginPage() {
    return <AuthPageLayout>
        <div style={{
            width: '100%',
        }}>
            <SiteTitle/>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "10px",
            marginTop: "10px"
            }} >
            <AuthTextInput text="Email or Username"/>
            <AuthPasswordInput text="Password"/>
        </div>
        <div style={{
            marginTop: "10px"
        }}>
            <p style={{color: 'white', textAlign: 'center'}} className="small-text">Belum punya akun? <Link replace href="sign-up"><span className="link">Daftar</span></Link></p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <PrimaryButton style={{
                width: '100px'
            }} text="Sign In"/>
        </div>
    </AuthPageLayout>
}