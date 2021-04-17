import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Autocomplete from './Autocomplete.jsx';
import "../styles/styleForms.scss";
import {addCity, addPoint} from "../redux/actions/actions";

export default function Forms() {
  const cities = useSelector(state => state.cityReducer);
  const points = useSelector(state => state.pointReducer);
  const store = useSelector(state => state.storeReducer);
  const [textCity, _] = useState(store.cityId.hasOwnProperty('name') ? store.cityId.name : '');
  const [textPoint, setTextPoint] = useState(store.pointId.hasOwnProperty('address') ? store.pointId.address : '');
  const dispatch = useDispatch();
  const refCity = useRef(null);
  const refPoint = useRef(null);

  useEffect(() => dispatch(addCity()), []);
  useEffect(() => {
    store.cityId.hasOwnProperty('name') ? dispatch(addPoint(store.cityId.id)) : null;
  }, [store]);

  return (
      <>
        <div className="autocomplete">
          <form>
            <div className="forms__city">
              <Autocomplete
                  currentText={textCity}
                  textLabel="Город:"
                  arrayUl={cities.city}
                  id="city"
                  currentRef={refCity}
                  isDisabled={false}
              />
            </div>
            <div className="forms__point">
              <Autocomplete
                  currentText={textPoint}
                  textLabel="Пункт выдачи:"
                  arrayUl={points.point}
                  id="point"
                  currentRef={refPoint}
                  isDisabled={(store.cityId.hasOwnProperty('name'))}
              />
            </div>
          </form>
        </div>
      </>
  );
}
