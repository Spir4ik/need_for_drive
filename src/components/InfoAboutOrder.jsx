import React from 'react'
import '../styles/styleInfoAboutOrder.scss'

export default function () {
    return(
        <div className="content__info-about-order">
            <div className="containers">
                <div className="info-about-order__header">
                    <p>Ваш заказ:</p>
                </div>
                <div className="info-about-order__header__body">
                    <div className="body__text">
                        <span>Пункт выдачи</span>
                    </div>
                    <div className="body__line"></div>
                    <div className="body__point">
                        <div className="city">
                            <span>Саранск</span>
                        </div>
                        <div className="address">
                            <span>Пролетарская</span>
                        </div>
                    </div>
                </div>
                <div className="info-about-order__header__footer">
                    <span><strong>Цена</strong>: от 8 000 до 12 000 ₽</span>
                    <button>Выбрать модель</button>
                </div>
            </div>
        </div>
    )
}