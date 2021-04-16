import React, { useEffect } from 'react'
import CarCard from "./CarCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner/Spinner.jsx";
import RadioComponent from "./Radio/RadioComponent.jsx";
import '../styles/styleCarsList.scss'
import {addCar} from "../actions/actions";

export default function () {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.carsReducer.car);
    const currentCategoryId = useSelector(state => state.categoryIdReducer);
    useEffect(() => {
        dispatch(addCar(currentCategoryId));
    }, [currentCategoryId]);

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