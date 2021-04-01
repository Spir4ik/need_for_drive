import React from 'react'
import styleAdditionalServices from './additionalServices.module.scss'
import RadioComponent from "../Radio/RadioComponent.jsx";
import Date from "../DateComponent/Date.jsx";

export default function () {
    return(
        <div className={styleAdditionalServices.container}>
            <div className={styleAdditionalServices.select__colors}>
                <span>Цвет</span>
                <RadioComponent />
            </div>
            <div className={styleAdditionalServices.select__date}>
                <span>Дата аренды</span>
                <Date />
            </div>
            <div className={styleAdditionalServices.select__rate}>
                <span>Тариф</span>
                <div className={styleAdditionalServices.form_radio}>
                    <input
                        id="radio-2"
                        type="radio"
                        name="test"
                        value=""
                    />
                    <label htmlFor="radio-2">Поминутно, 7₽/мин</label>
                </div>
                <div className={styleAdditionalServices.form_radio}>
                    <input
                        id="radio-2"
                        type="radio"
                        name="test"
                        value=""
                        checked={ true }
                    />
                    <label htmlFor="radio-2">На сутки, 1999 ₽/сутки</label>
                </div>
            </div>
            <div className="select__services">

            </div>
        </div>
    )
}