import React, { useEffect, useState } from 'react';
import LandingPageLayout from './Layouts/LandingPageLayout'
import TopNavigation from '../Components/LandingPage/TopNavigation';
import BookSearchBar from '../Components/LandingPage/BookSearchBar';
import BookSearchButton from '../Components/LandingPage/BookSearchButton';
import BookBrowseButton from '../Components/LandingPage/BookBrowseButton';

export default function LandingPage() {
    // changes to initial page
    const changeToInitialPage = () => {
        useEffect(() => {
            // shows minimal inner shadow
            document.body.classList.add("minimal-shadow")
        })
    }

    // changes to login page
    const changeToLoginPage = () => {

    }

    // use state current page
    const [currentPage, setCurrentPage] = useState("initial");

    // handles currentPage
    if(currentPage == "initial") {
        changeToInitialPage();
    }

    return (
        <LandingPageLayout>
            <TopNavigation/>
            <div className='book-container'>
                <div className='book-search-container'>
                    <BookSearchBar/>
                    <BookSearchButton/>
                </div>
                <BookBrowseButton/>
            </div>
        </LandingPageLayout>
    )
}