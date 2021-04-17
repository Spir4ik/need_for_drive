import React, { useEffect } from 'react'
import CarCard from "./CarCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner/Spinner.jsx";
import RadioComponent from "./Radio/RadioComponent.jsx";
import '../styles/styleCarsList.scss';
import selector from "../redux/selectors/selectors";
import {addCar} from "../redux/actions/actions";

export default function () {
    const dispatch = useDispatch();
    const selectors = selector(useSelector);

    useEffect(() => {
        dispatch(addCar(selectors.categoryId));
    }, [selectors.categoryId]);

    return(
        <>
            <RadioComponent />
                <div className="testest">
                    <div className="cars__list">
                        {selectors.cars.length === 0 ? <Spinner />
                            : selectors.cars.map(itemCar => {
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