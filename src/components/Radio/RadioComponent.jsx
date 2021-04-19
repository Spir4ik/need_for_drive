import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";
import '../../styles/styleFormRadio.scss'
import {addCategory, addCategoryId, addColorInStore} from "../../redux/actions/actions";
import selector from "../../redux/selectors/selectors";


export default function RadioComponent() {
    const {path} = useRouteMatch();
    const dispatch = useDispatch();
    const selectors = selector(useSelector);

    useEffect(() => dispatch(addCategory()), []);

    return(
        <>
            {path === '/modelspage' ? <div className="form_radio">
                <input
                    id="radio-1"
                    type="radio"
                    name="radio"
                    value=""
                    onChange={(e) => dispatch(addCategoryId(e.target.value))}
                    checked={ selectors.categoryId === "" }
                />
                <label htmlFor="radio-1">Все модели</label>
                {selectors.category.map(({name, id}) => {
                    return(
                        <React.Fragment key={id}>
                            <input
                                id={name}
                                type="radio"
                                name="radio"
                                value={id}
                                onChange={(e) => dispatch(addCategoryId(e.target.value))}
                                checked={ selectors.categoryId === id}
                            />
                            <label htmlFor={name}>{name}</label>
                        </React.Fragment>
                    )
                })}
            </div>
                :
            <div className="form_radio color-page">
                <input
                    id="any"
                    type="radio"
                    name="radio"
                    value="any"
                    onChange={(e) => dispatch(addColorInStore(e.target.value))}
                    checked={ selectors.store.color === "any" }
                />
                <label htmlFor="any">Любой</label>
                {selectors.store.carId.colors.map((item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <input
                                id={index}
                                type="radio"
                                name="radio"
                                value={item}
                                onChange={(e) => dispatch(addColorInStore(e.target.value))}
                                checked={ selectors.store.color === item}
                            />
                            <label htmlFor={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
                        </React.Fragment>
                    )
                })}
            </div>
            }
        </>
    )
}