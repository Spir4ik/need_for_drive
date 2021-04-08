import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import Navigation from "../components/Navigation.jsx";
import Spinner from "../components/Spinner/Spinner.jsx";
import UserOrder from "../components/UserOrder/UserOrder.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import {login, currentOrder} from '../actions/actions'


export default function () {
    const dispatch = useDispatch();
    const token = useSelector(state => state.loginReducer.accessToken);
    useEffect(() =>
        token === '' ? dispatch(login()) : dispatch(currentOrder(token, localStorage.getItem('id')))
        , [token]);
    const order = useSelector(state => state.currentOrderReducer.currentOrder[0]);
    console.log(order);
    const convertingDate = (date) => {
        return moment(new Date(date).toISOString()).format('DD.MM.YYYY hh:mm ')
    };
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
    };

    return(
        <div className="wrapper other-page">
            <HamburgerMenu />
            <div className="container other-page">
                <div className="content other-page">
                    {!order ? <Spinner /> : <>
                        <ContentHeader successCity={order.cityId.name}/>
                        <Navigation />
                        <div className="content__main">
                            <div className="main__params">
                                <UserOrder
                                    nameCar={order.carId.name}
                                    numberCar={order.carId.number}
                                    tankCar={order.carId.tank}
                                    fullTank={order.isFullTank}
                                    dateFrom={convertingDate(order.dateFrom)}
                                />
                            </div>
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
                    </>}
                </div>
            </div>
        </div>
    )
}