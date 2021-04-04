import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";
import '../../styles/styleFormRadio.scss'
import {addCategory, addCategoryId, addColorInStore} from "../../actions/actions";


export default function RadioComponent() {
    const {path} = useRouteMatch();
    const dispatch = useDispatch();
    const category = useSelector(state => state.categoryReducer.category);
    const currentCategoryId = useSelector(state => state.categoryIdReducer);
    const colorsCurrentCar = useSelector(state => state.storeReducer.carId.colors);
    const currentColor = useSelector(state => state.storeReducer.color);

    useEffect(() => dispatch(addCategory()), []);
    console.log(colorsCurrentCar);
    return(
        <>
            {path === '/modelspage' ? <div className="form_radio">
                <input
                    id="radio-1"
                    type="radio"
                    name="radio"
                    value=""
                    onChange={(e) => dispatch(addCategoryId(e.target.value))}
                    checked={ currentCategoryId === "" }
                />
                <label htmlFor="radio-1">Все модели</label>
                {category.map(({name, id}) => {
                    return(
                        <React.Fragment key={id}>
                            <input
                                id={name}
                                type="radio"
                                name="radio"
                                value={id}
                                onChange={(e) => dispatch(addCategoryId(e.target.value))}
                                checked={ currentCategoryId === id}
                            />
                            <label htmlFor={name}>{name}</label>
                        </React.Fragment>
                    )
                })}
            </div>
                :
            <div className="form_radio">
                <input
                    id="any"
                    type="radio"
                    name="radio"
                    value="any"
                    onChange={(e) => dispatch(addColorInStore(e.target.value))}
                    checked={ currentColor === "any" }
                />
                <label htmlFor="any">Любой</label>
                {colorsCurrentCar.map((item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <input
                                id={index}
                                type="radio"
                                name="radio"
                                value={item}
                                onChange={(e) => dispatch(addColorInStore(e.target.value))}
                                checked={ currentColor === item}
                            />
                            <label htmlFor={index}>{item}</label>
                        </React.Fragment>
                    )
                })}
            </div>
            }
        </>
    )
}