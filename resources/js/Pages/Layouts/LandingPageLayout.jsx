// imports css
import '../../../css/LandingPage/landing-page.css'
import React from 'react';

export default function LandingPageLayout({children}) {
    return <div className='landing-page-container'>
        {children}
    </div>;
}