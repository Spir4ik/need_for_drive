import React from 'react'
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import Navigation from "../components/Navigation.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import CarsList from "../components/CarsList.jsx";

export default function () {
    return(
        <div className="wrapper other-page">
            <HamburgerMenu />
            <div className="container other-page">
                <div className="content other-page">
                    <ContentHeader />
                    <Navigation />
                    <div className="content__main">
                        <div className="main__params">
                            <CarsList />
                        </div>
                        <InfoAboutOrder />
                    </div>
                </div>
            </div>
        </div>
    )
}