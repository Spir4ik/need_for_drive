import React from 'react'
import styleAdditionalServices from './additionalServices.module.scss'
import RadioComponent from "../Radio/RadioComponent.jsx";
import Checkbox from "../AdditionalCheckbox/Checkbox.jsx";
import Rate from "../RadioRate/Rate.jsx";
import Date from "../DateComponent/Date.jsx";

export default function () {
    return(
        <div className={styleAdditionalServices.container}>
            <div className={styleAdditionalServices.select__colors}>
                <span>Цвет</span>
                {/*<RadioComponent />*/}
            </div>
            <div className={styleAdditionalServices.select__date}>
                <span>Дата аренды</span>
                <Date />
            </div>
            <div className={styleAdditionalServices.select__rate}>
                <span>Тариф</span>
                <Rate />
            </div>
            <div className="select__services">
                <span>Доп. услуги</span>
                <Checkbox />
            </div>
        </div>
    )
}