import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CarCard from "./CarCard.jsx";
import Spinner from "./Spinner/Spinner.jsx";
import RadioComponent from "./Radio/RadioComponent.jsx";
import '../styles/styleCarsList.scss';
import categoryId from "../redux/selectors/categoryIdSelector";
import carsSelector from "../redux/selectors/carsSelector";
import addCar from "../redux/thunk/addCar";

export default function () {
    const dispatch = useDispatch();
    const cars = useSelector(carsSelector());
    const currentCategory = useSelector(categoryId());
    useEffect(() => dispatch(addCar(currentCategory)), [currentCategory]);

    return(
        <>
            <RadioComponent />
                <div className="testest">
                    <div className="cars__list">
                        {cars.length === 0 ? <Spinner />
                            : cars.map(itemCar => {
                                return(
                                    <CarCard
                                        key={itemCar.id}
                                        itemCar={itemCar}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
        </>
    )
}