import React, {useState} from 'react'
import iconAdaptet from '../../assets/icon-adaptet.svg'
import iconAdaptetClose from '../../assets/icon-adaptet_close.svg'
import styleAdaptet from './Adaptet.module.scss'
import InfoAboutOrder from "../InfoAboutOrder.jsx";

export default function () {
    const [showWindow, setShowWindow] = useState(false);
    return(
        <div className={styleAdaptet.test}>
            <img src={iconAdaptet} className={styleAdaptet.show_window} onClick={() => setShowWindow(!showWindow)} alt=""/>
            {showWindow &&
            <>
            <div className={styleAdaptet.test__window} onClick={() => setShowWindow(!showWindow)}>

            </div>
            <div className={styleAdaptet.windowIn}>
                <div className={styleAdaptet.closeBtn}>
                    {/*<span onClick={() => setShowWindow(!showWindow)}>X</span>*/}
                    <img src={iconAdaptetClose} onClick={() => setShowWindow(!showWindow)} alt=""/>
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