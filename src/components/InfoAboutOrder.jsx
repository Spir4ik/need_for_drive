import React from 'react'
import {useSelector} from "react-redux";
import '../styles/styleInfoAboutOrder.scss'
import {Link} from "react-router-dom";

export default function () {
    const orders = useSelector(state => state.order);

    const renderInfoBody = (bodyText, bodyCity, bodyFooter) => {
        return(
            <>
                <div className="body__text">
                    <span>{bodyText}</span>
                </div>
                <div className="body__line"></div>
                <div className="body__point">
                    {bodyCity && <div className="city">
                        <span>{bodyCity},</span>
                    </div>}
                    <div className="address">
                        <span>{bodyFooter}</span>
                    </div>
                </div>
            </>
        )
    };

    return(
        <div className="content__info-about-order">
            <div className="containers">
                <div className="info-about-order__header">
                    <p>Ваш заказ:</p>
                </div>
                <div className="info-about-order__header__body">
                    {orders.cityId.hasOwnProperty('name') && orders.pointId.hasOwnProperty('address') ?
                        renderInfoBody('Пункт выдачи', orders.cityId.name, orders.pointId.address)
                        :
                        renderInfoBody('Пункт выдачи', 'Выберите го.', 'Выберите п-т')
                    }
                </div>
                <div className="info-about-order__header__footer">
                    <span><strong>Цена</strong>: от 8 000 до 12 000 ₽</span>
                    <Link to="/modelspage">
                        <button>Выбрать модель</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}