import React, {useState} from 'react'
import iconNotification from '../../assets/icon-notifications.svg'
import styleAdaptet from './Adaptet.module.scss'
import InfoAboutOrder from "../InfoAboutOrder.jsx";

export default function () {
    const [showWindow, setShowWindow] = useState(false);
    return(
        <div className={styleAdaptet.test}>
            <img src={iconNotification} onClick={() => setShowWindow(!showWindow)} alt=""/>
            {showWindow &&
            <>
            <div className={styleAdaptet.test__window} onClick={() => setShowWindow(!showWindow)}>

            </div>
            <div className={styleAdaptet.windowIn}>
                <div className={styleAdaptet.closeBtn}>
                    <span onClick={() => setShowWindow(!showWindow)}>X</span>
                </div>
                <div className={styleAdaptet.test_window}>
                    <InfoAboutOrder />
                </div>
            </div>
            </>
            }
        </div>
    )
}