import React, { useEffect } from 'react'
import DatePicker, {registerLocale} from "react-datepicker";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import ru from 'date-fns/locale/ru'
import styleDate from './Date.module.scss'
import {addDaysAndHours, addPriceInStore, addDateFromInStore, addDateToInStore} from '../../actions/actions';

import "react-datepicker/dist/react-datepicker-cssmodules.css";

moment.locale('ru');

export default function () {
    registerLocale('ru', ru);
    const dispatch = useDispatch();
    const currentDate = useSelector(state => state.storeReducer.dateFrom);
    const startDate = new Date();
    const endDate = useSelector(state => state.storeReducer.dateTo);
    const orderRate = useSelector(state => state.storeReducer.rateId);
    const currentDaysAndHours = useSelector(state => state.daysAndHoursReducer);

    useEffect(() => {
        if (endDate) {
            const now = moment(currentDate);
            const end = moment(endDate);
            const duration = moment.duration(end.diff(now));
            const hours = duration.asHours();
            dispatch(addDaysAndHours(0, Math.ceil(duration.asHours())));
            if (Math.round(hours) >= 24) {
                dispatch(addDaysAndHours(Math.trunc(duration.asDays() + 0.01), (Math.ceil(duration.asHours()) % 24)))
            }
        }
    }, [endDate]);

    useEffect(() => {
        if (orderRate.hasOwnProperty('price')) {
            switch (orderRate.price) {
                case 1999:
                    dispatch(addPriceInStore(currentDaysAndHours.days * 1999));
                    break;
                case 7:
                    dispatch(addPriceInStore((currentDaysAndHours.days * 1440 * 7) + (currentDaysAndHours.hours * 60 * 7)));
                    break;
                case 7500:
                    currentDaysAndHours.days === 7 ? dispatch(addPriceInStore(7500)) : dispatch(addPriceInStore(0));
                    break;
                default:
                    dispatch(addPriceInStore(0))
            }
        }
    }, [currentDaysAndHours, orderRate]);

    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const filterDateToTime = time => {
        const selectedDate = new Date(time);

        return startDate.getTime() < selectedDate.getTime();
    };

    const handleChangeDateFrom = (date) => {
        dispatch(addDateToInStore(0));
        return dispatch(addDateFromInStore(Date.parse(date)));
    };

    const handleChangeDateTo = (date) => {
        const hours = new Date(currentDate).getHours();
        const min = new Date(currentDate).getMinutes();
        const year = new Date(date).getFullYear();
        const month = new Date(date).getMonth();
        const day = new Date(date).getDate();
        const currentHours = new Date(date).getHours() ? new Date(date).getHours() : hours;
        const currentMinute = new Date(date).getMinutes() ? new Date(date).getMinutes() : min;

        return dispatch(addDateToInStore(moment([year, month, day, currentHours, currentMinute, 0, 0]).valueOf()));
    };

    return (
        <div className={styleDate.date}>
            <div className={styleDate.date__from}>
                <label>С</label>
                <DatePicker
                    selected={new Date(currentDate)}
                    onChange={date => handleChangeDateFrom(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    disabledKeyboardNavigation
                    timeFormat="p"
                    timeIntervals={60}
                    locale="ru"
                    dateFormat="Pp"
                    placeholderText="Выберите дату и время"
                />
            </div>
            <div className={styleDate.date__to}>
                <label>По</label>
                <DatePicker
                    selected={endDate ? new Date(endDate) : 0}
                    onChange={date => handleChangeDateTo(date)}
                    selectsEnd
                    startDate={new Date(currentDate)}
                    endDate={endDate}
                    minDate={new Date(currentDate)}
                    showTimeSelect
                    filterTime={filterDateToTime}
                    disabledKeyboardNavigation
                    timeFormat="p"
                    timeIntervals={60}
                    locale="ru"
                    dateFormat="Pp"
                    placeholderText="Выберите дату и время"
                />
            </div>
        </div>
    );
}