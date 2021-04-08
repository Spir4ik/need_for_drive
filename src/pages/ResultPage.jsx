import React from 'react'
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import Navigation from "../components/Navigation.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import Window from "../components/ConfirmationWindow/Window.jsx";
import UserOrder from "../components/UserOrder/UserOrder.jsx";
import {useSelector} from "react-redux";

export default function () {
    const modalWindowStatus = useSelector(state => state.modalWindowReducer);
    return(
        <>
            <div className="wrapper other-page">
                <HamburgerMenu />
                <div className="container other-page">
                    <div className="content other-page">
                        <ContentHeader />
                        <Navigation />
                        <div className="content__main">
                            <div className="main__params">
                                <UserOrder />
                            </div>
                            <InfoAboutOrder />
                        </div>
                    </div>
                </div>
            </div>
        {modalWindowStatus && <Window />}
        </>
    )
}