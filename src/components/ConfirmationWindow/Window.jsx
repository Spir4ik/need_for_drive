import React, {useEffect} from 'react'
import styleWindow from './Window.module.scss';
import {useDispatch, useSelector} from "react-redux";
import orderIdSelector from "../../redux/selectors/orderIdSelector";
import storeSelector from "../../redux/selectors/storeSelector"
import Spinner from "../Spinner/Spinner.jsx";
import postData from "../../redux/thunk/postData";
import {showModalWindow} from "../../redux/actions/actions";

export default function () {
    const dispatch = useDispatch();
    const orderId = useSelector(orderIdSelector());
    const store = useSelector(storeSelector());

    useEffect(() => {
        const initialPage = window.location;
        if (orderId.currentOrderId !== '') {
            initialPage.replace(`${initialPage.origin}${initialPage.pathname}#/${orderId.currentOrderId}`)
        }
    }, [orderId.loading]);
    return(
        <div className={styleWindow.wrapper}>
            <div className={styleWindow.container}>
                {orderId.loading ? <Spinner /> :
                <>
                    <div className={styleWindow.window__header}>
                        <span>Подтвердить заказ</span>
                    </div>
                    <div className={styleWindow.window__buttons}>
                        <button onClick={() =>
                            dispatch(postData(store))
                        }>Подтвердить</button>
                        <button onClick={() => dispatch(showModalWindow())}>Вернуться</button>
                    </div>
                </>
                }
            </div>
        </div>
    )
}