import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Autocomplete from "../Autocomplete/Autocomplete.jsx";
import classes from './Forms.module.scss'
import {addCity, addPoint} from "../../redux/actions/actions";
import selector from "../../redux/selectors/selectors";

export default function Forms() {
    const selectors = selector(useSelector);
    const [textCity, _] = useState(selectors.store.cityId.hasOwnProperty('name') ? selectors.store.cityId.name : '');
    const [textPoint, setTextPoint] = useState(selectors.store.pointId.hasOwnProperty('address') ? selectors.store.pointId.address : '');
    const dispatch = useDispatch();

    useEffect(() => dispatch(addCity()), []);
    useEffect(() => {
        selectors.store.cityId.hasOwnProperty('name') ? dispatch(addPoint(selectors.store.cityId.id)) : null;
    }, [selectors.store]);

    return (
        <>
            <div className={classes.forms}>
                <form>
                    <div className={classes.city}>
                        <Autocomplete
                            currentText={textCity}
                            currrentlabel="Город"
                            currentArray={selectors.cities.city}
                            id="currentCity"
                        />
                    </div>
                    <div>
                        <Autocomplete
                            currentText={textPoint}
                            currrentlabel="Пункт выдачи"
                            currentArray={selectors.points.point}
                            id="currentPoint"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
