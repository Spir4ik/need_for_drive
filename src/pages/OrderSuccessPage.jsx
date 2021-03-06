import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import ContentHeader from "../components/ContentHeader.jsx";
import Navigation from "../components/Navigation.jsx";
import Spinner from "../components/Spinner/Spinner.jsx";
import UserOrder from "../components/UserOrder/UserOrder.jsx";
import InfoAboutOrder from "../components/InfoAboutOrder.jsx";
import Adaptet from "../components/Adapted/Adaptet.jsx";
import fetchLogin from "../redux/thunk/login";
import currentOrder from "../redux/thunk/currentOrder"
import tokenSelector from "../redux/selectors/tokenSelector"
import currentOrderSelector from "../redux/selectors/currentOrderSelector"


export default function () {
    const dispatch = useDispatch();
    const token = useSelector(tokenSelector());
    useEffect(() =>
        token === '' ? dispatch(fetchLogin()) : dispatch(currentOrder(token, localStorage.getItem('id')))
        , [token]);
    const order = useSelector(currentOrderSelector());

    const convertingDate = (date) => {
        return moment(new Date(date).toISOString()).format('DD.MM.YYYY HH:mm ');
    };

    const dateDifference = () => {
        if (order) {
            const now = moment(new Date(order.dateFrom).toISOString());
            const end = moment(new Date(order.dateTo).toISOString());
            const duration = moment.duration(end.diff(now));
            const days = Math.trunc(duration.asDays() + 0.01);
            const hours = Math.ceil(duration.asHours() !== 0 ? duration.asHours() % 24 : duration.asHours());
            return {
                days,
                hours
            };
        }
        return null;
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
                                <p className="order-confirmed__text">?????? ?????????? ??????????????????????</p>
                                <UserOrder
                                    nameCar={order.carId.name}
                                    numberCar={order.carId.number}
                                    tankCar={order.carId.tank}
                                    fullTank={order.isFullTank}
                                    dateFrom={convertingDate(order.dateFrom)}
                                    imageCar={order.carId.thumbnail}
                                />
                            </div>
                            <div className="content__info">
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
                    </>}
                    <Adaptet />
                </div>
            </div>
        </div>
    )
}