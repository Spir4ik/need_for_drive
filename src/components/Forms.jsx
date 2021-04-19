import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Autocomplete from './Autocomplete.jsx';
import "../styles/styleForms.scss";
import selector from "../redux/selectors/selectors";
import {addCity, addPoint} from "../redux/actions/actions";

export default function Forms() {
  const selectors = selector(useSelector);
  const [textCity, setTextCity] = useState('');
  const [textPoint, setTextPoint] = useState('');
  const dispatch = useDispatch();
  const refCity = useRef(null);
  const refPoint = useRef(null);

  useEffect(() => dispatch(addCity()), []);
  useEffect(() => {
    selectors.store.cityId.hasOwnProperty('name') ? dispatch(addPoint(selectors.store.cityId.id)) : null;
  }, [selectors.store]);
  useEffect(() => {
    setTextCity(selectors.store.cityId.hasOwnProperty('name') ? selectors.store.cityId.name : '');
    setTextPoint(selectors.store.pointId.hasOwnProperty('address') ? selectors.store.pointId.address : '');
  }, [selectors.store.cityId, selectors.store.pointId]);

  return (
      <>
        <div className="autocomplete">
          <form>
            <div className="forms__city">
              <Autocomplete
                  currentText={textCity}
                  textLabel="Город:"
                  arrayUl={selectors.cities.city}
                  id="city"
                  currentRef={refCity}
                  isDisabled={false}
              />
            </div>
            <div className="forms__point">
              <Autocomplete
                  currentText={textPoint}
                  textLabel="Пункт выдачи:"
                  arrayUl={selectors.points.point}
                  id="point"
                  currentRef={refPoint}
                  isDisabled={(selectors.store.cityId.hasOwnProperty('name'))}
              />
            </div>
          </form>
        </div>
      </>
  );
}
