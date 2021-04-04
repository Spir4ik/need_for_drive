import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import noImage from '../assets/no-image.png'
import {addCarInStore} from "../actions/actions";

export default function CarCard({id, name, priceMax, priceMin, thumbnail, colors, number, tank}) {
    const dispatch = useDispatch();

    return(
        <div className="cars__card" onClick={() => dispatch(addCarInStore({id, name, priceMax, priceMin, thumbnail, colors, number, tank}))}>
            <div className="card__header">
                <div className="header__name">
                    <span>{name}</span>
                </div>
                <div className="header__price">
                    <span>{priceMin} - {priceMax} ₽</span>
                </div>
            </div>
            <div className="card__image">
                <img src={thumbnail.path}
                     onError={(e) =>
                         {
                            e.target.onerror = null;
                            e.target.src='../assets/no-image.png'
                         }
                     } alt=""/>
            </div>
        </div>
    )
}

CarCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    priceMax: PropTypes.number,
    priceMin: PropTypes.number,
    thumbnail: PropTypes.object,
    colors: PropTypes.array,
    number: PropTypes.string,
    tank: PropTypes.number
};