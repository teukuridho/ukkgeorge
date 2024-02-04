import '../../../css/LandingPage/top-navigation.css'
import React from 'react'
import SecondaryButton from '../Shared/SecondaryButton'
import PrimaryButton from '../Shared/PrimaryButton'
export default function TopNavigation() {
    return (
        <div className="top-navigation" style={{background: ''}}>
            <h1 className="title">
                Digital<br/>
                Library
            </h1>
            <div className='top-navigation-buttons'>
                <SecondaryButton text="Home"/>
                <SecondaryButton text="Category"/>
                <SecondaryButton text="Sign In"/>
                <PrimaryButton text="Sign Up"/>
            </div>
        </div>
    )
}