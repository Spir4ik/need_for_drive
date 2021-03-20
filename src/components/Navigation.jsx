import React from 'react'
import iconVector from "../assets/Vector.svg";
import '../styles/breadcrumb.scss'

export default function () {
    return(
        <div className="breadcrumb">
            <ul>
                <li>Местоположение<img src={iconVector} alt=""/></li>
                <li>Модель<img src={iconVector} alt=""/></li>
                <li>Дополнительно<img src={iconVector} alt=""/></li>
                <li>Итого</li>
            </ul>
        </div>
    )
}