import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import '../../styles/styleFormRadio.scss'
import {addCategory, addCategoryId} from "../../actions/actions";


export default function RadioComponent() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categoryReducer.category);
    const currentCategoryId = useSelector(state => state.categoryIdReducer);
    useEffect(() => dispatch(addCategory()), []);

    return(
        <div className="form_radio">
            <input
                id="radio-1"
                type="radio"
                name="radio"
                value=""
                onChange={(e) => dispatch(addCategoryId(e.target.value))}
                checked={ currentCategoryId === "" }
            />
            <label htmlFor="radio-1">Любой</label>
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
    )
}