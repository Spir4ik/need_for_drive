import React, {useState, useEffect} from 'react'
import DatePicker, {registerLocale} from "react-datepicker";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import ru from 'date-fns/locale/ru'
import styleDate from './Date.module.scss'
import {addDaysAndHours} from '../../actions/actions'

import "react-datepicker/dist/react-datepicker-cssmodules.css";
moment.locale('ru');

export default function () {
    registerLocale('ru', ru);
    const dispatch = useDispatch();
    const datetest = useSelector(state => state.daysAndHoursReducer)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    console.log(datetest);
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

    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <div className={styleDate.date}>
            <div className={styleDate.date__from}>
                <label>С</label>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    showTimeSelect
                    filterTime={filterPassedTime}
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
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    showTimeSelect
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