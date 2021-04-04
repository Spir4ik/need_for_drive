import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import '../styles/styleInfoAboutOrder.scss'
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";

export default function () {
    const store = useSelector(state => state.storeReducer);
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
            case "/additional":
                return(
                    <Link to="/resultstage">
                        <button>Итого</button>
                    </Link>
                )
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
                    {store.cityId.hasOwnProperty('name') && store.pointId.hasOwnProperty('address') ?
                        renderInfoBody('Пункт выдачи', store.cityId.name, store.pointId.address)
                        :
                        renderInfoBody('Пункт выдачи', 'Выберите го.', 'Выберите п-т')
                    }
                    {store.carId.hasOwnProperty('id') ? renderInfoBody('Модель', false, store.carId.name) : null}
                    {renderInfoBody('Длительность аренды', false, `${''} 2ч`)}

                </div>
                <div className="info-about-order__header__footer">
                    {store.carId.hasOwnProperty('id') && path === "/modelspage" ?
                        <span><strong>Цена</strong>: от {store.carId.priceMin} до {store.carId.priceMax} ₽</span>
                        :
                        null
                    }
                    {path === "/additional" && <span><strong>Цена</strong>: {store.price} ₽</span>}
                    {renderBtn()}
                </div>
            </div>
        </div>
    )
}