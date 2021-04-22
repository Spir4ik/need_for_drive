import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from "react-redux";
import storeSelector from "../redux/selectors/storeSelector"
import noImage from '../assets/no-image.png'
import { addCarInStore, addDaysAndHours } from "../redux/actions/actions";

export default function CarCard({ itemCar }) {
    const dispatch = useDispatch();
    const store = useSelector(storeSelector());

    return(
        <div className={store.carId.id === itemCar.id ? "cars__card selected" : "cars__card"} onClick={() => {
            dispatch(addDaysAndHours(0, 0));
            dispatch(addCarInStore(itemCar));
        }}>
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