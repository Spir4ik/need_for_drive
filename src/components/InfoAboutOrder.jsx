import React from 'react'
import {useSelector} from "react-redux";
import '../styles/styleInfoAboutOrder.scss'
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";

export default function () {
    const orders = useSelector(state => state.order);
    const {path} = useRouteMatch();

    const renderBtn = () => {
        switch (path) {
            case "/carreservation":
                return(
                    <Link to="/modelspage">
                        <button>Выбрать модель</button>
                    </Link>
                );
            case "/modelspage":
                return(
                    <Link to="/additional">
                        <button>Дополнительно</button>
                    </Link>
                );
            default:
                return null;
        }
    }

    const renderInfoBody = (bodyText, bodyCity, bodyFooter) => {
        return(
            <div className="test">
                <div className="body__text">
                    <span>{bodyText}</span>
                </div>
                <div className="body__point">
                    {bodyCity && <div className="city">
                        <span>{bodyCity},</span>
                    </div>}
                    <div className="address">
                        <span>{bodyFooter}</span>
                    </div>
                </div>
            </div>
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
                    {orders.carId.hasOwnProperty('id') ? renderInfoBody('Модель', false, orders.carId.name) : null}


                </div>
                <div className="info-about-order__header__footer">
                    <span><strong>Цена</strong>: от 8 000 до 12 000 ₽</span>
                    {renderBtn()}
                </div>
            </div>
        </div>
    )
}