import React, {useState, useEffect} from 'react'
import DatePicker, {registerLocale} from "react-datepicker";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import ru from 'date-fns/locale/ru'
import styleDate from './Date.module.scss'
import {addDaysAndHours, addPriceInStore, addDateFromInStore, addDateToInStore} from '../../actions/actions'

import "react-datepicker/dist/react-datepicker-cssmodules.css";

moment.locale('ru');

export default function () {
    registerLocale('ru', ru);
    const dispatch = useDispatch();
    const order = useSelector(state => state.storeReducer.rateId);
    const currentDaysAndHours = useSelector(state => state.daysAndHoursReducer);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        if (endDate) {
            const now = moment(startDate);
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
        if (order.hasOwnProperty('price')) {
            switch (order.price) {
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
    }, [currentDaysAndHours, order]);

    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const filterDateToTime = time => {
        const selectedDate = new Date(time);

        return startDate.getTime() < selectedDate.getTime();
    };

    return (
        <div className={styleDate.date}>
            <div className={styleDate.date__from}>
                <label>С</label>
                <DatePicker
                    selected={startDate}
                    onChange={date => {
                        setStartDate(date);
                        dispatch(addDateFromInStore(Date.parse(date)))
                    }}
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
                    selected={endDate}
                    onChange={date => {
                        setEndDate(date);
                        dispatch(addDateToInStore(Date.parse(date)))
                    }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
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