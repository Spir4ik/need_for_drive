import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import storeSelector from '../redux/selectors/storeSelector';
import iconVector from "../assets/Vector.svg";
import {useRouteMatch} from "react-router-dom";
import '../styles/breadcrumb.scss'

export default function () {
    const store = useSelector(storeSelector())
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
                {textLi !== 'Итого' ? <img src={iconVector} alt="" /> : null}
            </li>
        )
    }

    return(
        <div className="breadcrumb">
            <div className="mytest">
                <ul>
                    {path === `/${localStorage.getItem('id')}` ?
                        <li className='nonactive'>Заказ номер {localStorage.getItem('id')}</li>
                        :
                        <>
                            {renderLi('/carreservation', true, 'Местоположение')}
                            {renderLi('/modelspage', (store.cityId.hasOwnProperty('name') && store.pointId.hasOwnProperty('address')), 'Модель')}
                            {renderLi('/additional', (store.carId.hasOwnProperty('name')), 'Дополнительно')}
                            {renderLi('/resultstage', (store.color !== '' && store.dateTo !== 0 && store.price !== 0), 'Итого')}
                        </>
                    }
                </ul>
            </div>
        </div>
    )
}