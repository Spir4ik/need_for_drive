import React from 'react'
import iconCity from "../assets/icon-city.svg";
import {useSelector} from "react-redux";

export default function () {
    const cityName = useSelector(state => state.order);
    return(
        <div className="content__header">
            <div className="header__logo">
                Need for drive
            </div>
            <div className="header__city">
                <img src={iconCity} alt=""/>
                {cityName.cityId.hasOwnProperty('name') ? <p>{cityName.cityId.name}</p> : <p>Выберите город</p>}
            </div>
        </div>
    )
}