import React from 'react';
import styleUserOrder from './UserOrder.module.scss';
import PropTypes from 'prop-types';

export default function UserOrder({nameCar, numberCar, tankCar, fullTank, dateFrom}) {
    return(
        <div className={styleUserOrder.userOrder__main}>
            <div className={styleUserOrder.userOrder__info}>
                <div className={styleUserOrder.info__nameCar}>
                    {nameCar ? nameCar : 'Hyndai'}
                </div>
                <div className={styleUserOrder.info__numberCar}>
                    <span>{numberCar ? numberCar : 'K761HA73'}</span>
                </div>
                <div className={styleUserOrder.info__tankCar}>
                    <span><strong>Топливо</strong> {fullTank ? '100%' : tankCar}</span>
                </div>
                <div className="info__dateCar">
                    <span><strong>Доступно с</strong> {dateFrom ? dateFrom : '12 32'}</span>
                </div>
            </div>
            <div className={styleUserOrder.userOrder__imageCar}>
                <img src="../../assets/no-image.png" alt=""/>
            </div>
        </div>
    )
}

UserOrder.propTypes = {
    nameCar: PropTypes.string,
    numberCar: PropTypes.string,
    tankCar: PropTypes.number,
    fullTank: PropTypes.bool,
    dateFrom: PropTypes.string
};