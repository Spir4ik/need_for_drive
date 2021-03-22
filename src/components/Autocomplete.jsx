import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import '../styles/styleForms.scss'
import {useLocation} from "react-router-dom";

export default function ({showAutoFunc}) {
    const [text, setText] = useState('');
    const [listCountry, setListCountry] = useState([]);
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order);
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            try {
                await axios({
                    url: 'https://api-factory.simbirsoft1.com/api/db/city',
                    method: 'GET',
                    headers: {
                        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
                        'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
                        'Content-type': 'application/json'
                    }
                }).then(res => setListCountry(res.data.data))
            }
            catch (e) {
                alert('Ошибка')
            }
        }
        fetchData()
    }, []);

    console.log(orders);

    return(
        <>
        {location.pathname === "/carreservation" ? <div className="autocomplete">
            <form>
                <div className="forms__city">
                    <label htmlFor="city">Город:</label>
                    <input type="text"
                           className="form-control"
                           id="city"
                           placeholder="Начните вводить город ..."
                    />
                </div>
                <div className="forms__point">
                    <label htmlFor="point">Пункт выдачи:</label>
                    <input type="text"
                           className="form-control"
                           id="point"
                           placeholder="Начните вводить пункт ..."
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
            {text && <ul>
                {listCountry.map(({name, id}) => {
                    const textText = text.charAt(0).toUpperCase() + text.slice(1);
                    return (name.includes(textText) ?
                        <li key={id} onClick={() => {
                            dispatch({type: "GET_ORDER", payload: {cityId: {name: name, id: id}}});
                            showAutoFunc(false)
                        }}>{name}</li>
                        :
                        null)
                })}
            </ul>}
        </div>}
        </>
    )
}