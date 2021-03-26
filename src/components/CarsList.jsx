import React, {useEffect, useState} from 'react'
import axios from "axios";
import CarCard from "./CarCard.jsx";
import requestCity from "../api/requestCity";
import '../styles/styleFormRadio.scss'
import '../styles/styleCarsList.scss'

export default function () {
    const [currentCategory, setCurrentCategory] = useState('');
    const [arrayCars, setArrayCars] = useState([]);
    useEffect(() => {
        // async function fetchCars() {
        //     try {
        //         await axios({
        //             url: `https://api-factory.simbirsoft1.com/api/db/car?categoryId=5e25c99a099b810b946c5d63`,
        //             method: 'GET',
        //             headers: {
        //                 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
        //                 'Authorization': 'Basic MTJmNHY4aTo0Y2JjZWE5NmRl',
        //                 'Content-type': 'application/json'
        //             }
        //         }).then(res => console.log(res))
        //     }
        //     catch (e) {
        //         alert(e)
        //     }
        // }
        // fetchCars()
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
    }

    console.log(arrayCars);

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
                {arrayCars.map(({id, name, priceMax, priceMin, thumbnail}) => {
                    return(
                        <CarCard
                        key={id}
                        name={name}
                        priceMax={priceMax}
                        priceMin={priceMin}
                        thumbnail={thumbnail}
                        />
                    )
                })}
            </div>
        </>
    )
}