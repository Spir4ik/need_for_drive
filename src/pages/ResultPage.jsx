import React from 'react'
import {useSelector} from "react-redux";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import Navigation from "../components/Navigation.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import Window from "../components/ConfirmationWindow/Window.jsx";
import UserOrder from "../components/UserOrder/UserOrder.jsx";
import selector from "../redux/selectors/selectors";
import Adaptet from "../components/Adapted/Adaptet.jsx";

export default function () {
    const selectors = selector(useSelector);

    return(
        <>
            <div className="wrapper other-page">
                <HamburgerMenu />
                <div className="container other-page">
                    <div className="content other-page">
                        <ContentHeader />
                        <Adaptet />
                        <Navigation />
                        <div className="content__main">
                            <div className="main__params">
                                <UserOrder />
                            </div>
                            <div className="content__info">
                                <InfoAboutOrder />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {selectors.modalWindowStatus && <Window />}
        </>
    )
}