import React from 'react'
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import Navigation from "../components/Navigation.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import AdditionalServices from "../components/AdditionalServices/AdditionalServices.jsx";
import Adaptet from "../components/Adapted/Adaptet.jsx";

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
                            <AdditionalServices />
                        </div>
                        <div className="content__info">
                            <InfoAboutOrder />
                        </div>
                    </div>
                    <Adaptet />
                </div>
            </div>
        </div>
    )
}