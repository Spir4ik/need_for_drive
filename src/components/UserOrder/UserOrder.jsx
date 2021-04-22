import React from 'react';
import {useSelector} from "react-redux";
import moment from "moment";
import styleUserOrder from './UserOrder.module.scss';
import PropTypes from 'prop-types';
import storeSelector from '../../redux/selectors/storeSelector'
import noImage from "../../assets/no-image.png";

export default function UserOrder({nameCar, numberCar, tankCar, fullTank, dateFrom, imageCar}) {
    const store = useSelector(storeSelector())
    return(
        <div className={styleUserOrder.userOrder__main}>
            <div className={styleUserOrder.userOrder__info}>
                <div className={styleUserOrder.info__nameCar}>
                    {nameCar ? nameCar : store.carId.name}
                </div>
                <div className={styleUserOrder.info__numberCar}>
                    {numberCar ? <span>{numberCar}</span> : store.carId.number ? <span>{store.carId.number}</span> : null}
                </div>
                <div className={styleUserOrder.info__tankCar}>
                    <span><strong>Топливо</strong> {fullTank || store.isFullTank ? '100%' : tankCar ? tankCar : `${store.carId.tank ? store.carId.tank : 20}%`}</span>
                </div>
                <div className="info__dateCar">
                    <span><strong>Доступно с</strong> {dateFrom ? dateFrom : moment(new Date(store.dateFrom).toISOString()).format('DD.MM.YYYY HH:mm ')}</span>
                </div>
            </div>
            <div className={styleUserOrder.userOrder__imageCar}>
                <img
                    src={imageCar ? `https://api-factory.simbirsoft1.com${imageCar.path}` : `https://api-factory.simbirsoft1.com${store.carId.thumbnail.path}`}
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