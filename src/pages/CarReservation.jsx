import React from 'react'
import {useSelector} from "react-redux";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import Navigation from "../components/Navigation.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import Forms from "../components/Forms.jsx";
import Map from "../components/YandexMap/Map.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import Adaptet from "../components/Adapted/Adaptet.jsx";
import storeSelector from "../redux/selectors/storeSelector";

export default function () {
    const store = useSelector(storeSelector())
    return(
        <div className="wrapper other-page">
            <HamburgerMenu />
            <div className="container other-page">
                <div className="content other-page">
                    <ContentHeader />
                    <Navigation />
                    <div className="content__main">
                        <div className="main__params">
                            <Forms />
                            {store.cityId.hasOwnProperty('name') ? <Map/> : null}
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