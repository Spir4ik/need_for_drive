import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Autocomplete from './Autocomplete.jsx';
import "../styles/styleForms.scss";
import {addCity, addPoint} from "../actions/actions";

export default function Forms() {
  const cities = useSelector(state => state.cityReducer);
  const points = useSelector(state => state.pointReducer);
  const store = useSelector(state => state.storeReducer);
  const [textCity, _] = useState(store.cityId.hasOwnProperty('name') ? store.cityId.name : '');
  const [textPoint, setTextPoint] = useState(store.pointId.hasOwnProperty('address') ? store.pointId.address : '');
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => dispatch(addCity()), []);
  useEffect(() => {
    store.cityId.hasOwnProperty('name') ? dispatch(addPoint(store.cityId.id)) : null;
  }, [store]);

  console.log(store);

  return (
      <>
        {location.pathname === "/carreservation" ? <div className="autocomplete">
              <form>
                <div className="forms__city">
                  <Autocomplete
                      currentText={textCity}
                      textLabel="Город:"
                      arrayUl={cities.city}
                      id="city"
                  />
                </div>
                <div className="forms__point">
                  <Autocomplete
                      currentText={textPoint}
                      textLabel="Пункт выдачи:"
                      arrayUl={points.point}
                      id="point"
                  />
                </div>
              </form>
            </div>
            :
            <div className="autocomplete main-page">
              <form>
                <div className="forms__city main-page">
                  <Autocomplete
                      arrayUl={cities.city}
                      id="city"
                  />
                </div>
              </form>
            </div>}
      </>
  );
}
