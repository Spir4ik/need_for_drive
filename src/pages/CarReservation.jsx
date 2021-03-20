import React from 'react'
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import iconCity from "../assets/icon-city.svg";
import Navigation from "../components/Navigation.jsx";
import '../styles/styleForms.scss'
import '../styles/styleInfoAboutOrder.scss'

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
                            <div className="autocomplete">
                                <form>
                                    <div className="forms__city">
                                        <label htmlFor="city">Город:</label>
                                        <input type="text"
                                               className="form-control"
                                               id="city"
                                               placeholder="Начните вводить город ..."
                                        />
                                    </div>
                                    <div className="forms__point">
                                        <label htmlFor="point">Пункт выдачи:</label>
                                        <input type="text"
                                               className="form-control"
                                               id="point"
                                               placeholder="Начните вводить пункт ..."
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="params__map">
                                <span>Выбрать на карте:</span>
                                <img src="../images/Rectangle.png" alt=""/>
                            </div>
                        </div>
                        <div className="content__info-about-order">
                            <div className="containers">
                                <div className="info-about-order__header">
                                    <p>Ваш заказ:</p>
                                </div>
                                <div className="info-about-order__header__body">
                                    <div className="body__text">
                                        <span>Пункт выдачи</span>
                                    </div>
                                    <div className="body__line"></div>
                                    <div className="body__point">
                                        <div className="city">
                                            <span>Саранск</span>
                                        </div>
                                        <div className="address">
                                            <span>Пролетарская</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-about-order__header__footer">
                                   <span>Цена: от 8 000 до 12 000 ₽</span>
                                   <button>Выбрать модель</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}