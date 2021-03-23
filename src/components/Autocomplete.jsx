import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import requestDataBase from "../api/requestDataBase";
import requestPoint from "../api/requestPoint";
import TestAuto from "./TestAuto.jsx";
import PropTypes from 'prop-types'
import '../styles/styleForms.scss'

export default function Autocomplete({showAutoFunc}) {
    const orders = useSelector(state => state.order);
    const [text, setText] = useState(orders.hasOwnProperty('cityId') ? `${orders.cityId.name}` : '');
    const [listCountry, setListCountry] = useState([]);
    const [listPoint, setListPoint] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        async function fetchDataCity() {
            try {
                await axios(requestDataBase('city'))
                    .then(res => setListCountry(res.data.data))
            }
            catch (e) {
                alert('Ошибка')
            }
        }
        fetchDataCity()
    }, []);

    useEffect(() => {
        async function fetchDataPoint() {
            const cityId = orders.cityId.id;
            try {
                await axios(requestPoint(cityId))
                    .then(res => setListPoint(res.data.data))
            }
            catch (e) {
                alert('Ошибка с адресом!')
            }
        }
        orders.hasOwnProperty('cityId') ? fetchDataPoint() : null
    }, [orders]);


    const renderElemLi = () => {
        return(
            <ul className={location.pathname === "/carreservation" ? "ul-elem__two-page" : ""}>
                {listCountry.map(({name, id}) => {
                    const textText = text.charAt(0).toUpperCase() + text.slice(1);
                    return (name.includes(textText) ?
                        <li key={id} onClick={() => {
                            dispatch({type: "GET_ORDER", payload: {cityId: {name: name, id: id}}});
                            {location.pathname !== "#/carreservation" ? showAutoFunc(false) : null}
                        }}>{name}</li>
                        :
                        null)
                })}
            </ul>
        )
    };

    return(
        <>
        {location.pathname === "/carreservation" ? <div className="autocomplete">
            <form>
                <div className="forms__city">
                    <TestAuto
                        textLabel="Город"
                        arrayUl={listCountry}
                        id="city"
                    />
                </div>
                <div className="forms__point">
                    {/*<label htmlFor="point">Пункт выдачи:</label>*/}
                    {/*<input type="text"*/}
                    {/*       className="form-control"*/}
                    {/*       id="point"*/}
                    {/*       placeholder="Начните вводить пункт ..."*/}
                    {/*/>*/}
                    <TestAuto
                        textLabel="Пункт"
                        arrayUl={listPoint}
                        id="point"
                    />
                </div>
            </form>
        </div>
        :
        <div className="autocomplete main-page">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="forms__city main-page">
                    <input type="text"
                           className="form-control"
                           id="city"
                           onChange={(e) => setText(e.target.value)}
                           value={text}
                           autoComplete="off"
                           placeholder="Начните вводить город ..."
                    />
                </div>
            </form>
            {text && renderElemLi()}
        </div>}
        </>
    )
}

Autocomplete.propTypes = {
    showAutoFunc: PropTypes.func
}