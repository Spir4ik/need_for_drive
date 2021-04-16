import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import {addCarInStore} from "../actions/actions";
import noImage from '../assets/no-image.png'

export default function CarCard({ itemCar }) {
    const dispatch = useDispatch();

    return(
        <div className="cars__card" onClick={() => dispatch(addCarInStore(itemCar))}>
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