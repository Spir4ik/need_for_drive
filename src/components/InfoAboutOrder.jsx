import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import '../styles/styleInfoAboutOrder.scss'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
import {useRouteMatch} from "react-router-dom";
import {showModalWindow, deleteCurrentOrder} from '../actions/actions'

export default function InfoAboutOrder({orderId, city, point, modelCar, color, rate, fullTank, babyArmchir, rightWheel, price, leaseDuration}) {
    const store = useSelector(state => state.storeReducer);
    const currentDays = useSelector(state => state.daysAndHoursReducer.days);
    const currentHours = useSelector(state => state.daysAndHoursReducer.hours);
    const token = useSelector(state => state.loginReducer.accessToken);
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
                );
            case "/resultstage":
                return(
                    <button onClick={() => dispatch(showModalWindow())}>Заказать</button>
                );
            default:
                return(
                    <button className="btn__success-page" onClick={() => deleteOrderFunc()}>Отменить</button>
                )
        }
    };

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

    const renderInfoInProcess = () => {
        return(
            <>
                {store.cityId.hasOwnProperty('name') && store.pointId.hasOwnProperty('address') ?
                    renderInfoBody('Пункт выдачи', store.cityId.name, store.pointId.address)
                    :
                    renderInfoBody('Пункт выдачи', 'Выберите го.', 'Выберите п-т')
                }
                {store.carId.hasOwnProperty('id') ? renderInfoBody('Модель', false, store.carId.name) : null}
                {store.color !== '' ? renderInfoBody('Цвет', false, store.color === 'any' ? 'Любой' : store.color) : null}
                {currentDays && currentHours ? renderInfoBody('Длительность аренды', false, `${currentDays}д ${currentHours}ч`) : null}
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
                        <span><strong>Цена</strong>: от {store.carId.priceMin} до {store.carId.priceMax} ₽</span>
                        :
                        null
                    }
                    {price ? <span><strong>Цена</strong>: {price} ₽</span>
                           :
                           (path === "/additional" || path === "/resultstage") && <span><strong>Цена</strong>: {store.price} ₽</span>}
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