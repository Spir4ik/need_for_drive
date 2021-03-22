import React, {useEffect} from 'react'
import axios from "axios";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import iconCity from "../assets/icon-city.svg";
import Navigation from "../components/Navigation.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import Autocomplete from "../components/Autocomplete.jsx";
import Map from "../components/Map.jsx";

export default function () {

    return(
        <div className="wrapper other-page">
            <HamburgerMenu />
            <div className="container other-page">
                <div className="content other-page">

                    <div className="content__header">
                        <div className="header__logo">
                            Need for drive
                        </div>
                        <div className="header__city">
                            <img src={iconCity} alt=""/>
                            <p>Ульяновск</p>
                        </div>
                    </div>

                    <Navigation />
                    <div className="content__main">
                        <div className="main__params">
                            <Autocomplete />
                            <Map />
                        </div>
                        <InfoAboutOrder />
                    </div>
                </div>
            </div>
        </div>
    )
}