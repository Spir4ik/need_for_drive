import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../styles/styleInfoAboutOrder.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useRouteMatch } from "react-router-dom";
import selector from '../redux/selectors/selectors.js';
import { showModalWindow, deleteCurrentOrder } from '../redux/actions/actions';

export default function InfoAboutOrder({ orderId, city, point, modelCar, color, rate, fullTank, babyArmchir, rightWheel, price, leaseDuration}) {
    const selectors = selector(useSelector);
    const {path} = useRouteMatch();
    const dispatch = useDispatch();

    const deleteOrderFunc = () => {
        localStorage.removeItem('id');
        dispatch(deleteCurrentOrder(selectors.token, `${localStorage.getItem('id')}`));
        return window.location.reload();
    };

    const renderBtn = () => {
        switch (path) {
            case "/carreservation":
                return(
                    <Link to="/modelspage">
                        <button
                            disabled={!(selectors.store.cityId.hasOwnProperty('name') &&
                                selectors.store.pointId.hasOwnProperty('address'))}>
                            Выбрать модель
                        </button>
                    </Link>
                );
            case "/modelspage":
                return(
                    <Link to="/additional">
                        <button disabled={!(selectors.store.carId.hasOwnProperty('id'))}>
                            Дополнительно
                        </button>
                    </Link>
                );
            case "/additional":
                return(
                    <Link to="/resultstage">
                        <button disabled={!(selectors.store.color !== '' && (selectors.currentDays || selectors.currentHours) && selectors.store.rateId.hasOwnProperty('rateTypeId'))}>
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
                {selectors.store.cityId.hasOwnProperty('name') && selectors.store.pointId.hasOwnProperty('address') ?
                    renderInfoBody('Пункт выдачи', selectors.store.cityId.name, selectors.store.pointId.address)
                    :
                    renderInfoBody('Пункт выдачи', 'Выберите го.', 'Выберите п-т')
                }
                {selectors.store.carId.hasOwnProperty('id') ? renderInfoBody('Модель', false, selectors.store.carId.name) : null}
                {selectors.store.color !== '' ? renderInfoBody('Цвет', false, selectors.store.color === 'any' ? 'Любой' : selectors.store.color.charAt(0).toUpperCase() + selectors.store.color.slice(1)) : null}
                {selectors.currentDays || selectors.currentHours ? renderInfoBody('Длительность аренды', false, `${selectors.currentDays}д ${selectors.currentHours}ч`) : null}
                {selectors.store.rateId.hasOwnProperty('rateTypeId') ? renderInfoBody('Тариф', false, selectors.store.rateId.rateTypeId.name) : null}
                {selectors.store.isFullTank ? renderInfoBody('Полный бак', false, 'Да') : null}
                {selectors.store.isNeedChildChair ? renderInfoBody('Детское кресло', false, 'Да') : null}
                {selectors.store.isRightWheel ? renderInfoBody('Правый руль', false, 'Да') : null}
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
                    {selectors.store.carId.hasOwnProperty('id') && path === "/modelspage" ?
                        <span><strong>Цена</strong>: от {selectors.store.carId.priceMin} до {selectors.store.carId.priceMax} ₽</span>
                        :
                        null
                    }
                    {price ? <span><strong>Цена</strong>: {price} ₽</span>
                           :
                           (path === "/additional" || path === "/resultstage") && <span><strong>Цена</strong>: {selectors.store.price} ₽</span>}
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