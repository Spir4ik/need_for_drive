import React, {useState} from 'react'
import sliderItems from '../constants'
import '../styles/styleSlider.scss'

export default function () {
    const [currentIdx, setCurrentIdx] = useState(0);

    const renderItems =() => {
        return sliderItems.map(({title, img, info, id, background}) => {
            return(
                <div className='slider__item' style={{transform: `translateX(${currentIdx}%)`}} key={id}>
                    <div className="slider__item-container">
                        <div className="slider__item-content">
                            <img src={img} alt=""/>
                            <div className="bg-dark"></div>
                            <div className="preImg">
                                <div className="preImg__header">
                                    {title}
                                </div>
                                <div className="preImg__footer">
                                    <p>{info}</p>
                                </div>
                                <div className="preImg__btn">
                                    <button style={{background: background}}>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    };

    const setNext = () => {
        currentIdx === 0 ? setCurrentIdx(-300) : setCurrentIdx(currentIdx + 100)
    };

    const setPrev = () => {
        currentIdx === -300 ? setCurrentIdx(0) : setCurrentIdx(currentIdx - 100)
    };

    return(
        <>
            <div className="slider">
                <div className="slider__container">
                    <div className="slider__wrapper">
                        <div className="slider__items">
                            {renderItems()}
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="prev-btn" onClick={() => setNext()}></div>
                    <div className="prev">
                        <div className="prev-top"></div>
                        <div className="prev-bottom"></div>
                    </div>
                    <div className="next-btn" onClick={() => setPrev()}></div>
                    <div className="next">
                        <div className="next-top"></div>
                        <div className="next-bottom"></div>
                    </div>
                </div>
                <div className="slider__indicators">
                    <ul>
                        <li className={currentIdx === 0 ? 'active' : ''} onClick={() => setCurrentIdx(0)}> </li>
                        <li className={currentIdx === -100 ? 'active' : ''} onClick={() => setCurrentIdx(-100)}> </li>
                        <li className={currentIdx === -200 ? 'active' : ''} onClick={() => setCurrentIdx(-200)}> </li>
                        <li className={currentIdx === -300 ? 'active' : ''} onClick={() => setCurrentIdx(-300)}> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}