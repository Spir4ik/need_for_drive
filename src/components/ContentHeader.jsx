import React from 'react'
import iconCity from "../assets/icon-city.svg";
import PropTypes from 'prop-types'
import {useSelector} from "react-redux";

export default function ContentHeader({successCity}) {
    const store = useSelector(state => state.storeReducer);
    return(
        <div className="content__header">
            <div className="header__logo">
                Need for drive
            </div>
            <div className="header__city">
                <img src={iconCity} alt=""/>
                {store.cityId.hasOwnProperty('name') ? <p>{store.cityId.name}</p> : successCity ? <p>{successCity}</p> : <p>Выберите город</p>}
            </div>
        </div>
    )
}

ContentHeader.propTypes = {
    successCity: PropTypes.string
};