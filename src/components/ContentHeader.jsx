import React from 'react'
import iconCity from "../assets/icon-city.svg";
import PropTypes from 'prop-types'
import selector from '../redux/selectors/selectors.js';
import { useSelector } from "react-redux";

export default function ContentHeader({successCity}) {
    const selectors = selector(useSelector).store;
    return(
        <div className="content__header">
            <div className="header__logo">
                Need for drive
            </div>
            <div className="header__city">
                <img src={iconCity} alt=""/>
                {selectors.cityId.hasOwnProperty('name') ? <p>{selectors.cityId.name}</p> : successCity ? <p>{successCity}</p> : <p>Выберите город</p>}
            </div>
        </div>
    )
}

ContentHeader.propTypes = {
    successCity: PropTypes.string
};