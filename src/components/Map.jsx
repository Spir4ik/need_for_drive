import React from 'react'
import map from '../images/Rectangle.png'

export default function () {
    return(
        <div className="params__map">
            <span>Выбрать на карте:</span>
            <img src={map} alt=""/>
        </div>
    )
}