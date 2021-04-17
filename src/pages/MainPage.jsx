import React, {useEffect} from 'react'
import Slider from "../components/Slider.jsx";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCity} from "../redux/actions/actions";

export default function () {
    const dispatch = useDispatch();
    useEffect(() => dispatch(addCity()), []);

    return(
        <div className="wrapper">
            <div className="container">
                <HamburgerMenu />
                <div className="content">
                    <div className="content__header">
                        <div className="header__logo">
                            Need for drive
                        </div>
                    </div>
                    <div className="content__hero-block">
                        <div className="hero-block__header">
                            <p>Каршеринг</p>
                            <p>Need for drive</p>
                        </div>
                        <div className="hero-block__footer">
                            <p>Поминутная аренда авто твоего города</p>
                        </div>
                        <div className="hero__block__btn">
                            <Link to="carreservation">
                                <button>Забронировать</button>
                            </Link>
                        </div>
                    </div>
                    <div className="content__footer">
                        <div className="footer__info">
                            <p>© 2016-2019 «Need for drive»</p>
                        </div>
                        <div className="footer__phone">
                            <p>8 (495) 234-22-44</p>
                        </div>
                    </div>
                </div>
                <div className="carousel">
                    <Slider />
                </div>
            </div>
        </div>
    )
}