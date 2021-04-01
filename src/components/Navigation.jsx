import React from 'react'
import iconVector from "../assets/Vector.svg";
import {useRouteMatch} from "react-router-dom";
import '../styles/breadcrumb.scss'

export default function () {
    const {path} = useRouteMatch();
    return(
        <div className="breadcrumb">
            <ul>
                <li className={path === '/carreservation' ? 'active' : 'nonactive'}>Местоположение<img src={iconVector} alt=""/></li>
                <li className={path === '/modelspage' ? 'active' : path === '/carreservation' ? '' : 'nonactive'}>Модель<img src={iconVector} alt=""/></li>
                <li className={path === '/additional' ? 'active' : path === '/modelspage' || path === '/carreservation' ? '' : 'nonactive'}>Дополнительно<img src={iconVector} alt=""/></li>
                <li>Итого</li>
            </ul>
        </div>
    )
}