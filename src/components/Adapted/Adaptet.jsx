import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import iconAdaptet from '../../assets/icon-adaptet.svg'
import iconAdaptetClose from '../../assets/icon-adaptet_close.svg'
import styleAdaptet from './Adaptet.module.scss'
import InfoAboutOrder from "../InfoAboutOrder.jsx";
import currentOrderSelector from "../../redux/selectors/currentOrderSelector";
import moment from "moment";

export default function () {
    const [showWindow, setShowWindow] = useState(false);
    const order = useSelector(currentOrderSelector());

    const dateDifference = () => {
        if (order) {
            const now = moment(new Date(order.dateFrom).toISOString());
            const end = moment(new Date(order.dateTo).toISOString());
            const duration = moment.duration(end.diff(now));
            const days = Math.trunc(duration.asDays() + 0.01);
            const hours = Math.ceil(duration.asHours() % 24);
            return {
                days,
                hours
            };
        }
        return null;
    };

    return(
        <div className={styleAdaptet.adaptet}>
            <div className={styleAdaptet.test}>
                <img src={iconAdaptet} className={styleAdaptet.show_window} onClick={() => setShowWindow(!showWindow)} alt=""/>
            </div>
            {showWindow &&
            <>
                <div className={styleAdaptet.test__window} onClick={() => setShowWindow(!showWindow)}>

                </div>
                <div className={styleAdaptet.windowIn}>
                    <div className={styleAdaptet.closeBtn}>
                        <img src={iconAdaptetClose} onClick={() => setShowWindow(!showWindow)} alt=""/>
                    </div>
                    <div className={styleAdaptet.test_window}>
                        <InfoAboutOrder
                            city={order.cityId.name}
                            point={order.pointId.address}
                            modelCar={order.carId.name}
                            color={order.color}
                            rate={order.rateId.rateTypeId.name}
                            leaseDuration={dateDifference()}
                            fullTank={order.isFullTank}
                            babyArmchir={order.isNeedChildChair}
                            rightWheel={order.isRightWheel}
                            price={order.price}
                            orderId={order.id}
                        />
                    </div>
                </div>
            </>
            }
        </div>
    )
}