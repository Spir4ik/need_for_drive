import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import requestCity from '../api/requestCity';
import requestPoint from '../api/requestPoint';
import TestAuto from './TestAuto.jsx';
import "../styles/styleForms.scss";

export default function Autocomplete() {
  const orders = useSelector(state => state.order);
  const [textCity, _] = useState(orders.cityId.hasOwnProperty('name') ? orders.cityId.name : '');
  const [textPoint, setTextPoint] = useState(orders.pointId.hasOwnProperty('address') ? orders.pointId.address : '');
  const [listCountry, setListCountry] = useState([]);
  const [listPoint, setListPoint] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchDataCity() {
      try {
        await axios(requestCity('city'))
          .then(res => setListCountry(res.data.data));
      } catch (e) {
        alert('Ошибка');
      }
    }
    fetchDataCity();
  }, []);

  useEffect(() => {
    async function fetchDataPoint() {
      const cityId = orders.cityId.id;
      try {
        await axios(requestPoint(cityId))
          .then(res => setListPoint(res.data.data));
      } catch (e) {
        alert('Ошибка с адресом!');
      }
    }
    orders.cityId.hasOwnProperty('name') ? fetchDataPoint() : null;
  }, [orders]);

  return (
      <>
        {location.pathname === "/carreservation" ? <div className="autocomplete">
              <form>
                <div className="forms__city">
                  <TestAuto
                      currentText={textCity}
                      textLabel="Город:"
                      arrayUl={listCountry}
                      id="city"
                  />
                </div>
                <div className="forms__point">
                  <TestAuto
                      currentText={textPoint}
                      textLabel="Пункт выдачи:"
                      arrayUl={listPoint}
                      id="point"
                  />
                </div>
              </form>
            </div>
            :
            <div className="autocomplete main-page">
              <form>
                <div className="forms__city main-page">
                  <TestAuto
                      arrayUl={listCountry}
                      id="city"
                  />
                </div>
              </form>
            </div>}
      </>
  );
}
