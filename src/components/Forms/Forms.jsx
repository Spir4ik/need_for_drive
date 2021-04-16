import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Autocomplete from "../Autocomplete/Autocomplete.jsx";
import classes from './Forms.module.scss'
import {addCity, addPoint} from "../../actions/actions";

export default function Forms() {
    const cities = useSelector(state => state.cityReducer);
    const points = useSelector(state => state.pointReducer);
    const store = useSelector(state => state.storeReducer);
    const [textCity, _] = useState(store.cityId.hasOwnProperty('name') ? store.cityId.name : '');
    const [textPoint, setTextPoint] = useState(store.pointId.hasOwnProperty('address') ? store.pointId.address : '');
    const dispatch = useDispatch();

    useEffect(() => dispatch(addCity()), []);
    useEffect(() => {
        store.cityId.hasOwnProperty('name') ? dispatch(addPoint(store.cityId.id)) : null;
    }, [store]);

    return (
        <>
            <div className={classes.forms}>
                <form>
                    <div className={classes.city}>
                        <Autocomplete
                            currentText={textCity}
                            currrentlabel="Город"
                            currentArray={cities.city}
                            id="currentCity"
                        />
                    </div>
                    <div>
                        <Autocomplete
                            currentText={textPoint}
                            currrentlabel="Пункт выдачи"
                            currentArray={points.point}
                            id="currentPoint"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
