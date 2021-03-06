import React, {useState} from 'react'
import iconFacebook from '../assets/Facebook_white.svg'
import iconTelegram from '../assets/Telegram_white.svg'
import iconInstagram from '../assets/Instagram_white.svg'
import '../styles/styleHamburger-menu.scss'

export default function () {
    const [showMenuBack, setShowMenuBack] = useState(false);
    const [showRusLanguage, setShowRusLanguage] = useState(false);

    return(
        <div className="header">
            <input id="menu__toggle" type="checkbox"
                onChange={() => setShowMenuBack(!showMenuBack)}
            />
            <label className='menu__btn' htmlFor="menu__toggle">
                <span></span>
            </label>
            <div className="cover-element"></div>
            <div className="menu__language" onClick={() => setShowRusLanguage(!showRusLanguage)}>
                {showRusLanguage ? <p>Рус</p> : <p>Eng</p>}
            </div>
            {showMenuBack && <div className={window.location.hash !== '#/' ? "menu__back two" : "menu__back"}>
                <div className="menu__list">
                    <ul>
                        <li>ПАРКОВКА</li>
                        <li>СТРАХОВКА</li>
                        <li>БЕНЗИН</li>
                        <li>ОБСЛУЖИВАНИЕ</li>
                    </ul>
                    <div className="social_media_emblems">
                        <a href="#">
                            <img src={iconFacebook} className="bg_facebook" alt="" />
                        </a>

                        <a href="#">
                            <img src={iconTelegram} className="bg_telegram" alt="" />
                        </a>

                        <a href="#">
                            <img src={iconInstagram} className="bg_instagram" alt="" />
                        </a>
                    </div>
                </div>
                <div className="menu__language front-slider" onClick={() => setShowRusLanguage(!showRusLanguage)}>
                    {showRusLanguage ? <p>Рус</p> : <p>Eng</p>}
                </div>
                {window.location.hash === '#/' && <div className="menu__back__front-slider"></div>}
            </div>}
        </div>
    )
}