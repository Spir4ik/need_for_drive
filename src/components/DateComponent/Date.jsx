import React, {useState} from 'react'
import DatePicker, {registerLocale} from "react-datepicker";
import moment from "moment";
import ru from 'date-fns/locale/ru'
import styleDate from './Date.module.scss'

import "react-datepicker/dist/react-datepicker-cssmodules.css";
moment.locale('ru');

export default function () {
    registerLocale('ru', ru);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

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
                    timeFormat="p"
                    timeIntervals={15}
                    locale="ru"
                    dateFormat="Pp"
                />
            </div>
            <div className={styleDate.date__to}>
                <label>По</label>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(Date.parse(date))}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    showTimeSelect
                    timeFormat="p"
                    timeIntervals={15}
                    locale="ru"
                    dateFormat="Pp"
                    placeholderText="Выберите дату и время"
                />
            </div>
        </div>
    );
}