import React, { useEffect } from 'react'
import CarCard from "./CarCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "./Spinner/Spinner.jsx";
import RadioComponent from "./Radio/RadioComponent.jsx";
import '../styles/styleCarsList.scss'
import {addCar} from "../actions/actions";

export default function () {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.carsReducer.car);
    const currentCategoryId = useSelector(state => state.categoryIdReducer);
    useEffect(() => {
        dispatch(addCar(currentCategoryId))
    }, [currentCategoryId]);

    return(
        <>
            <RadioComponent />
                <div className="testest">
                    <div className="cars__list">
                        {cars.length === 0 ? <Spinner />
                            : cars.map(({id, name, priceMax, priceMin, thumbnail, colors, number, tank, categoryId, description, createdAt, updatedAt}) => {
                                return(
                                    <CarCard
                                        key={id}
                                        id={id}
                                        colors={colors}
                                        number={number}
                                        tank={tank}
                                        name={name}
                                        priceMax={priceMax}
                                        priceMin={priceMin}
                                        thumbnail={thumbnail}
                                        categoryId={categoryId}
                                        description={description}
                                        createdAt={createdAt}
                                        updatedAt={updatedAt}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
        </>
    )
}