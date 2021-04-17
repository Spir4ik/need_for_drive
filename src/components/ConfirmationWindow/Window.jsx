import React, {useEffect} from 'react'
import styleWindow from './Window.module.scss';
import {useDispatch, useSelector} from "react-redux";
import selector from '../../redux/selectors/selectors'
import Spinner from "../Spinner/Spinner.jsx";
import {showModalWindow, postData} from "../../redux/actions/actions";

export default function () {
    const dispatch = useDispatch();
    const selectors = selector(useSelector);

    useEffect(() => {
        const initialPage = window.location;
        if (selectors.orderId.currentOrderId !== '') {
            initialPage.replace(`${initialPage.origin}${initialPage.pathname}#/${selectors.orderId.currentOrderId}`)
        }
    }, [selectors.orderId.loading]);
    return(
        <div className={styleWindow.wrapper}>
            <div className={styleWindow.container}>
                {selectors.orderId.loading ? <Spinner /> :
                <>
                    <div className={styleWindow.window__header}>
                        <span>Подтвердить заказ</span>
                    </div>
                    <div className={styleWindow.window__buttons}>
                        <button onClick={() =>
                            dispatch(postData(selectors.store))
                        }>Подтвердить</button>
                        <button onClick={() => dispatch(showModalWindow())}>Вернуться</button>
                    </div>
                </>
                }
            </div>
        </div>
    )
}