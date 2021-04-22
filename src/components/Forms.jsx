import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Autocomplete from './Autocomplete.jsx';
import "../styles/styleForms.scss";
import storeSelector from "../redux/selectors/storeSelector";
import citySelector from '../redux/selectors/citySelector'
import pointSelector from '../redux/selectors/pointSelector'
import addCity from "../redux/thunk/addCity";
import addPoint from "../redux/thunk/addPoint";

export default function Forms() {
  const store = useSelector(storeSelector());
  const cities = useSelector(citySelector());
  const points = useSelector(pointSelector());
  const [textCity, setTextCity] = useState('');
  const [textPoint, setTextPoint] = useState('');
  const dispatch = useDispatch();
  const refCity = useRef(null);
  const refPoint = useRef(null);

  useEffect(() => dispatch(addCity()), []);
  useEffect(() => {
    store.cityId.hasOwnProperty('name') ? dispatch(addPoint(store.cityId.id)) : null;
  }, [store]);
  useEffect(() => {
    setTextCity(store.cityId.hasOwnProperty('name') ? store.cityId.name : '');
    setTextPoint(store.pointId.hasOwnProperty('address') ? store.pointId.address : '');
  }, [store.cityId, store.pointId]);
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
                  isDisabled={(store.cityId.hasOwnProperty('address'))}
              />
            </div>
          </form>
        </div>
      </>
  );
}
