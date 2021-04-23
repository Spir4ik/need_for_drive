import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";
import '../../styles/styleFormRadio.scss'
import {addCategoryId, addColorInStore} from "../../redux/actions/actions";
import addCategory from "../../redux/thunk/addCategory";
import category from '../../redux/selectors/categorySelector'
import categoryIdSelector from "../../redux/selectors/categoryIdSelector";
import storeSelector from '../../redux/selectors/storeSelector'


export default function RadioComponent() {
    const {path} = useRouteMatch();
    const dispatch = useDispatch();
    const categories = useSelector(category());
    const currentCategory = useSelector(categoryIdSelector());
    const store = useSelector(storeSelector())
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
                    checked={ currentCategory === "" }
                />
                <label htmlFor="radio-1">Все модели</label>
                {categories.map(({name, id}) => {
                    return(
                        <React.Fragment key={id}>
                            <input
                                id={name}
                                type="radio"
                                name="radio"
                                value={id}
                                onChange={(e) => dispatch(addCategoryId(e.target.value))}
                                checked={ currentCategory === id}
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
                    checked={ store.color === "any" }
                />
                <label htmlFor="any">Любой</label>
                {store.carId.colors.map((item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <input
                                id={index}
                                type="radio"
                                name="radio"
                                value={item}
                                onChange={(e) => dispatch(addColorInStore(e.target.value))}
                                checked={ store.color === item}
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