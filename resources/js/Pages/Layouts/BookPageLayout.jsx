import React from "react";
import SiteTitle from "../../Components/Shared/SiteTitle";
export default function BookPageLayout({children}) {
    return (
        <div className="bg-white h-full py-3 sm:py-7 px-10 sm:px-14">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="grow">
                        <svg className="ml-[-24px] w-12 h-12 sm:w-20 sm:h-20 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                        </svg>
                    </div>
                    <div className="flex grow items-center flex-col sm:flex-row gap-y-5">
                        <div className="grow">
                            <SiteTitle className="!text-black !text-start"/>
                        </div>
                        <div className="grow font-light text-end">
                            Not Logged In
                        </div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
        </div>
    )
}