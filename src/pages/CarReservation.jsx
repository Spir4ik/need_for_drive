import React from 'react'
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import Navigation from "../components/Navigation.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import Forms from "../components/Forms.jsx";
// import Forms from "../components/Forms/Forms.jsx";
import Map from "../components/Map.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import Adaptet from "../components/Adapted/Adaptet.jsx";

export default function () {

    return(
        <div className="wrapper other-page">
            <HamburgerMenu />
            <div className="container other-page">
                <div className="content other-page">
                    <ContentHeader />
                        <Adaptet />
                    <Navigation />
                    <div className="content__main">
                        <div className="main__params">
                            <Forms />
                            <Map />
                        </div>
                        <div className="content__info">
                            <InfoAboutOrder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}