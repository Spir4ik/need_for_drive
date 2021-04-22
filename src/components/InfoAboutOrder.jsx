import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../styles/styleInfoAboutOrder.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useRouteMatch } from "react-router-dom";
import storeSelector from "../redux/selectors/storeSelector";
import daysAndHoursSelector from "../redux/selectors/daysAndHours";
import tokenSelector from "../redux/selectors/tokenSelector";
import { showModalWindow } from '../redux/actions/actions';
import deleteCurrentOrder from "../redux/thunk/deleteCurrentOrder";

export default function InfoAboutOrder({ orderId, city, point, modelCar, color, rate, fullTank, babyArmchir, rightWheel, price, leaseDuration}) {
    const store = useSelector(storeSelector());
    const daysAndHours = useSelector(daysAndHoursSelector());
    const token = useSelector(tokenSelector());
    const {path} = useRouteMatch();
    const dispatch = useDispatch();

    const deleteOrderFunc = () => {
        localStorage.removeItem('id');
        dispatch(deleteCurrentOrder(token, `${localStorage.getItem('id')}`));
        return window.location.reload();
    };

    const renderBtn = () => {
        switch (path) {
            case "/carreservation":
                return(
                    <Link to="/modelspage">
                        <button
                            disabled={!(store.cityId.hasOwnProperty('name') &&
                                store.pointId.hasOwnProperty('address'))}>
                            Выбрать модель
                        </button>
                    </Link>
                );
            case "/modelspage":
                return(
                    <Link to="/additional">
                        <button disabled={!(store.carId.hasOwnProperty('id'))}>
                            Дополнительно
                        </button>
                    </Link>
                );
            case "/additional":
                return(
                    <Link to="/resultstage">
                        <button disabled={!(store.color !== '' && (daysAndHours.days || daysAndHours.hours) && store.price !== 0)}>
                            Итого
                        </button>
                    </Link>
                );
            case "/resultstage":
                return(
                    <button onClick={() => dispatch(showModalWindow())}>Заказать</button>
                );
            default:
                return(
                    <button className="btn__success-page" onClick={() => deleteOrderFunc()}>Отменить</button>
                );
        }
    };

    const renderInfoBody = (bodyText, bodyCity, bodyFooter) => {
        return(
            <div className="test">
                <div className="body__text">
                    <span>{bodyText}</span>
                </div>
                <div className="line"></div>
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

    const renderInfoInProcess = () => {
        return(
            <>
                {store.cityId.hasOwnProperty('name') && store.pointId.hasOwnProperty('address') ?
                    renderInfoBody('Пункт выдачи', store.cityId.name, store.pointId.address)
                    :
                    renderInfoBody('Пункт выдачи', 'Выберите го.', 'Выберите п-т')
                }
                {store.carId.hasOwnProperty('id') ? renderInfoBody('Модель', false, store.carId.name) : null}
                {store.color !== '' ? renderInfoBody('Цвет', false, store.color === 'any' ? 'Любой' : store.color.charAt(0).toUpperCase() + store.color.slice(1)) : null}
                {daysAndHours.days || daysAndHours.hours ? renderInfoBody('Длительность аренды', false, `${daysAndHours.days}д ${daysAndHours.hours}ч`) : null}
                {store.rateId.hasOwnProperty('rateTypeId') ? renderInfoBody('Тариф', false, store.rateId.rateTypeId.name) : null}
                {store.isFullTank ? renderInfoBody('Полный бак', false, 'Да') : null}
                {store.isNeedChildChair ? renderInfoBody('Детское кресло', false, 'Да') : null}
                {store.isRightWheel ? renderInfoBody('Правый руль', false, 'Да') : null}
            </>
        )
    };

    const renderReadyOrder = () => {
        return(
            <>
                {renderInfoBody('Пункт выдачи', city, point)}
                {renderInfoBody('Модель', false, modelCar)}
                {renderInfoBody('Цвет', false, color)}
                {renderInfoBody('Длительность аренды', false, `${leaseDuration.days}д ${leaseDuration.hours}ч`)}
                {renderInfoBody('Тариф', false, rate)}
                {fullTank ? renderInfoBody('Полный бак', false, 'Да') : null}
                {babyArmchir ? renderInfoBody('Детское кресло', false, 'Да') : null}
                {rightWheel ? renderInfoBody('Правый руль', false, 'Да') : null}
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
                    {orderId ? renderReadyOrder() : renderInfoInProcess()}
                </div>
                <div className="info-about-order__header__footer">
                    {store.carId.hasOwnProperty('id') && path === "/modelspage" ?
                        <p><strong>Цена</strong>: от {store.carId.priceMin} до {store.carId.priceMax} ₽</p>
                        :
                        null
                    }
                    {price ? <p><strong>Цена</strong>: {price} ₽</p>
                           :
                           (path === "/additional" || path === "/resultstage") && <p><strong>Цена</strong>: {store.price} ₽</p>}
                    {renderBtn()}
                </div>
            </div>
        </div>
    )
}

InfoAboutOrder.propTypes = {
    city: PropTypes.string,
    point: PropTypes.string,
    modelCar: PropTypes.string,
    color: PropTypes.string,
    rate: PropTypes.string,
    fullTank: PropTypes.bool,
    babyArmchir: PropTypes.bool,
    rightWheel: PropTypes.bool,
    price: PropTypes.number,
    leaseDuration: PropTypes.object,
    orderId: PropTypes.string
};