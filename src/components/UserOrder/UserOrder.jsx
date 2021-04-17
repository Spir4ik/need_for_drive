import React from 'react';
import {useSelector} from "react-redux";
import moment from "moment";
import styleUserOrder from './UserOrder.module.scss';
import PropTypes from 'prop-types';
import selector from "../../redux/selectors/selectors";
import noImage from "../../assets/no-image.png";

export default function UserOrder({nameCar, numberCar, tankCar, fullTank, dateFrom, imageCar}) {
    const store = selector(useSelector).store;
    return(
        <div className={styleUserOrder.userOrder__main}>
            <div className={styleUserOrder.userOrder__info}>
                <div className={styleUserOrder.info__nameCar}>
                    {nameCar ? nameCar : store.carId.name}
                </div>
                <div className={styleUserOrder.info__numberCar}>
                    <span>{numberCar ? numberCar : store.carId.number}</span>
                </div>
                <div className={styleUserOrder.info__tankCar}>
                    <span><strong>Топливо</strong> {fullTank || store.isFullTank ? '100%' : tankCar ? tankCar : store.carId.tank}</span>
                </div>
                <div className="info__dateCar">
                    <span><strong>Доступно с</strong> {dateFrom ? dateFrom : moment(new Date(store.dateFrom).toISOString()).format('DD.MM.YYYY HH:mm ')}</span>
                </div>
            </div>
            <div className={styleUserOrder.userOrder__imageCar}>
                <img
                    src={imageCar ? imageCar.path : store.carId.thumbnail.path}
                    onError={(e) =>
                        {
                        e.target.onerror = null;
                        e.target.src = noImage
                        }
                    }
                    alt=""
                />
            </div>
        </div>
    )
}

UserOrder.propTypes = {
    nameCar: PropTypes.string,
    numberCar: PropTypes.string,
    tankCar: PropTypes.number,
    fullTank: PropTypes.bool,
    dateFrom: PropTypes.string,
    imageCar: PropTypes.object
};