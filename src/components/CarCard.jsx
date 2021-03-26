import React from 'react'
import noImage from '../images/no-image.jpg'

export default function ({id, name, priceMax, priceMin, thumbnail}) {
    return(
        <div className="cars__card">
            <div className="card__header">
                <div className="header__name">
                    <span>{name}</span>
                </div>
                <div className="header__price">
                    <span>{priceMin} - {priceMax} ₽</span>
                </div>
            </div>
            <div className="card__image">
                <img src={thumbnail.path ? thumbnail.path : noImage} alt=""/>
            </div>
        </div>
    )
}