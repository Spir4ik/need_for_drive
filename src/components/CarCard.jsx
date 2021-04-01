import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";
import noImage from '../assets/no-image.png'

export default function CarCard({id, name, priceMax, priceMin, thumbnail, colors, number, tank}) {
    const dispatch = useDispatch();
    const addInStore = useCallback((type, payload) => dispatch({type: type, payload: payload}));
    return(
        <div className="cars__card" onClick={() => addInStore("GET_CAR", {carId: {id, name, priceMax, priceMin, thumbnail, colors, number, tank}})}>
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
                            e.target.src="../assets/no-image.png"
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