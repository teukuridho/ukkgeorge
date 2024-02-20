import React from 'react';
import LandingPageLayout from '../Layouts/LandingPageLayout'
import TopNavigation from '../../Components/LandingPage/TopNavigation';
import BookSearchBar from '../../Components/LandingPage/BookSearchBar';
import BookSearchButton from '../../Components/LandingPage/BookSearchButton';
import PrimaryButton from '../../Components/Shared/PrimaryButton';

export default function LandingPage() {
    return (
        <LandingPageLayout>
            <TopNavigation/>
            <div className='book-container'>
                <div className='book-search-container'>
                    <BookSearchBar/>
                    <BookSearchButton/>
                </div>
                <PrimaryButton link="book/list" text="Browse"/>
            </div>
        </LandingPageLayout>
    )
}