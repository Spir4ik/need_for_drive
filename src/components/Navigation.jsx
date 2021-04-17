import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import selector from "../redux/selectors/selectors";
import iconVector from "../assets/Vector.svg";
import {useRouteMatch} from "react-router-dom";
import '../styles/breadcrumb.scss'

export default function () {
    const selectors = selector(useSelector).store;
    const {path} = useRouteMatch();

    const renderClassName = (pathName, condition) => {
        if (path === pathName) {
            return "active";
        }
        if (condition) {
            return "nonactive";
        }
        return "";
    }

    const renderLi = (pathName, condition, textLi) => {
        return(
            <li className={renderClassName(pathName, condition)}>
                {condition && path !== pathName ?
                    <Link to={pathName}>
                        {textLi}
                    </Link> : textLi }
                <img src={iconVector} alt="" />
            </li>
        )
    }

    return(
        <div className="breadcrumb">
            <ul>
                {path === `/${localStorage.getItem('id')}` ?
                    <li className='nonactive'>Заказ номер {localStorage.getItem('id')}</li>
                    :
                    <>
                        {renderLi('/carreservation', true, 'Местоположение')}
                        {renderLi('/modelspage', (selectors.cityId.hasOwnProperty('name') && selectors.pointId.hasOwnProperty('address')), 'Модель')}
                        {renderLi('/additional', (selectors.carId.hasOwnProperty('name')), 'Дополнительно')}
                        {renderLi('/resultstage', (selectors.color !== '' && selectors.dateTo !== 0 && selectors.rateId.hasOwnProperty('id')), 'Итого')}
                    </>
                    }
            </ul>
        </div>
    )
}