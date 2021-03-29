import React, {useEffect, useState} from 'react'
import axios from "axios";
import CarCard from "./CarCard.jsx";
import requestCity from "../api/requestCity";
import Spinner from "./Spinner/Spinner.jsx";
import '../styles/styleFormRadio.scss'
import '../styles/styleCarsList.scss'

export default function () {
    const [currentCategory, setCurrentCategory] = useState('');
    const [arrayCars, setArrayCars] = useState([]);
    useEffect(() => {
        setArrayCars([]);
        async function fetchAllCars() {
            try {
                await axios(requestCity('car')).then(res => setArrayCars(res.data.data))
            }
            catch (e) {
                alert(e)
            }
        }

        async function fetchCategoryCars() {
            try {
                await axios(requestCity(`car?categoryId=${currentCategory}`)).then(res => setArrayCars(res.data.data))
            }
            catch (e) {
                alert(e)
            }
        }
        currentCategory !== '' ? fetchCategoryCars() : fetchAllCars()
    }, [currentCategory]);

    const handleChange = (category) => {
        return setCurrentCategory(category)
    };

    return(
        <>
            <div className="form_radio">
                <input
                    id="radio-1"
                    type="radio"
                    name="radio"
                    value=""
                    onChange={(e) => handleChange(e.target.value)}
                    checked={ currentCategory === "" }
                />
                    <label htmlFor="radio-1">Все модели</label>
                <input
                    id="radio-2"
                    type="radio"
                    name="radio"
                    value="5e25c98d099b810b946c5d62"
                    onChange={(e) => handleChange(e.target.value)}
                    checked={ currentCategory === "5e25c98d099b810b946c5d62" }
                />
                    <label htmlFor="radio-2">Эконом</label>
                <input
                    id="radio-3"
                    type="radio"
                    name="radio"
                    value="5e25c99a099b810b946c5d63"
                    onChange={(e) => handleChange(e.target.value)}
                    checked={ currentCategory === "5e25c99a099b810b946c5d63" }
                />
                    <label htmlFor="radio-3">Премиум</label>
            </div>
            <div className="cars__list">
                {arrayCars.length === 0 ? <Spinner />
                : arrayCars.map(({id, name, priceMax, priceMin, thumbnail}) => {
                        return(
                            <CarCard
                                key={id}
                                id={id}
                                name={name}
                                priceMax={priceMax}
                                priceMin={priceMin}
                                thumbnail={thumbnail}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}