import React, {useState} from 'react'
import sliderItems from '../constants'
import '../styles/styleSlider.scss'

export default function () {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [images, _] = useState(sliderItems.map(({title, img, info}) => {
        const key = new Date();
        return { title, img, info, key }
    }));


    const renderItems =() => {
        return sliderItems.map(({title, img, info, id}) => {
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
                                    {info}
                                </div>
                                <div className="preImg__btn">
                                    <button>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    };

    const setNext = () => {
        currentIdx === 200 ? setCurrentIdx(0) : setCurrentIdx(currentIdx + 100)
        console.log('worked???')
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
            </div>
        </>
    )
}