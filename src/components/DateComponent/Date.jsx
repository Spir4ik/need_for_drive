import React, { useEffect } from 'react'
import DatePicker, {registerLocale} from "react-datepicker";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import ru from 'date-fns/locale/ru'
import styleDate from './Date.module.scss'
import storeSelector from '../../redux/selectors/storeSelector'
import daysAndHours from "../../redux/selectors/daysAndHours";
import {addDaysAndHours, addPriceInStore, addDateFromInStore, addDateToInStore} from '../../redux/actions/actions';

import "react-datepicker/dist/react-datepicker-cssmodules.css";

moment.locale('ru');

export default function () {
    registerLocale('ru', ru);
    const dispatch = useDispatch();
    const store = useSelector(storeSelector());
    const currentDaysAndHours = useSelector(daysAndHours());

    useEffect(() => {
        if (store.dateTo) {
            const now = moment(store.dateFrom);
            const end = moment(store.dateTo);
            const duration = moment.duration(end.diff(now));
            const hours = duration.asHours();
            dispatch(addDaysAndHours(0, Math.ceil(duration.asHours())));
            if (Math.round(hours) >= 24) {
                dispatch(addDaysAndHours(Math.trunc(duration.asDays() + 0.01), (Math.ceil(duration.asHours()) % 24)));
            }
        }
    }, [store.dateTo]);

    useEffect(() => {
        if (store.rateId.hasOwnProperty('price')) {
            switch (store.rateId.price) {
                case 1999:
                    currentDaysAndHours.hours ?
                        dispatch(addPriceInStore((currentDaysAndHours.days + 1) * 1999))
                        : dispatch(addPriceInStore(currentDaysAndHours.days * 1999))
                    break;
                case 7:
                    dispatch(addPriceInStore((currentDaysAndHours.days * 1440 * 7) + (currentDaysAndHours.hours * 60 * 7)));
                    break;
                case 7500:
                    (currentDaysAndHours.days === 7) ? dispatch(addPriceInStore(7500)) : dispatch(addPriceInStore(0));
                    break;
                default:
                    dispatch(addPriceInStore(0));
            }
        }
    }, [currentDaysAndHours, store.rateId]);

    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const filterDateToTime = time => {
        const selectedDate = new Date(time);

        return new Date().getTime() < selectedDate.getTime();
    };

    const handleChangeDateFrom = (date) => {
        dispatch(addDateToInStore(0));
        return dispatch(addDateFromInStore(Date.parse(date)));
    };

    const handleChangeDateTo = (date) => {
        const hours = new Date(store.dateFrom).getHours();
        const min = new Date(store.dateFrom).getMinutes();
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
                <label>??</label>
                <DatePicker
                    selected={new Date(store.dateFrom)}
                    onChange={date => handleChangeDateFrom(date)}
                    selectsStart
                    startDate={new Date()}
                    endDate={store.dateTo}
                    minDate={new Date()}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    disabledKeyboardNavigation
                    timeFormat="p"
                    timeIntervals={60}
                    locale="ru"
                    dateFormat="Pp"
                    placeholderText="???????????????? ???????? ?? ??????????"
                />
            </div>
            <div className={styleDate.date__to}>
                <label>????</label>
                <DatePicker
                    selected={store.dateTo ? new Date(store.dateTo) : 0}
                    onChange={date => handleChangeDateTo(date)}
                    selectsEnd
                    startDate={new Date(store.dateFrom)}
                    endDate={store.dateTo}
                    minDate={new Date(store.dateFrom)}
                    showTimeSelect
                    filterTime={filterDateToTime}
                    disabledKeyboardNavigation
                    timeFormat="p"
                    timeIntervals={60}
                    locale="ru"
                    dateFormat="Pp"
                    placeholderText="???????????????? ???????? ?? ??????????"
                />
            </div>
        </div>
    );
}