import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import noImage from '../assets/no-image.png'
import {
    addCarInStore,
    addRateInStore,
    addColorInStore,
    addPriceInStore,
    addDateFromInStore,
    addDateToInStore,
    clearTankInStore,
    clearCharInStore,
    clearRightHandDrive,
    addDaysAndHours
} from "../redux/actions/actions";

export default function CarCard({ itemCar }) {
    const dispatch = useDispatch();

    return(
        <div className="cars__card" onClick={() => {
                dispatch(addCarInStore(itemCar));
                dispatch(addRateInStore({}));
                dispatch(addColorInStore(''));
                dispatch(addPriceInStore(0));
                dispatch(addDateFromInStore(Date.parse(new Date())));
                dispatch(addDateToInStore(0));
                dispatch(clearTankInStore());
                dispatch(clearCharInStore());
                dispatch(clearRightHandDrive());
                dispatch(addDaysAndHours(0, 0));
            }
        }>
            <div className="card__header">
                <div className="header__name">
                    <span>{itemCar.name}</span>
                </div>
                <div className="header__price">
                    <span>{itemCar.priceMin} - {itemCar.priceMax} ₽</span>
                </div>
            </div>
            <div className="card__image">
                <img src={`https://api-factory.simbirsoft1.com${itemCar.thumbnail.path}`}
                     onError={(e) =>
                         {
                            e.target.onerror = null;
                            e.target.src = noImage;
                         }
                     } alt=""
                />
            </div>
        </div>
    )
}

CarCard.propTypes = {
    itemCar: PropTypes.object
};