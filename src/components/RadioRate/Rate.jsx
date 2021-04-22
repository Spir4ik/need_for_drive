import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styleRate from './Rate.module.scss';
import rateSelector from "../../redux/selectors/rateSelector";
import storeReducer from "../../redux/selectors/storeSelector";
import {addRateInStore} from '../../redux/actions/actions'
import addRate from "../../redux/thunk/addRate";

export default function () {
    const dispatch = useDispatch();
    const rate = useSelector(rateSelector());
    const store = useSelector(storeReducer())
    useEffect(() => dispatch(addRate()), []);

    return(
        <div className={styleRate.rate__item}>
            {rate.map(({rateTypeId, price, id}) => {
                return(
                    <div className={styleRate.rate__radio} key={id}>
                        <input
                            id={rateTypeId.name}
                            type="radio"
                            name="test"
                            value=""
                            onChange={() => dispatch(addRateInStore({rateTypeId, price, id}))}
                            checked={store.rateId.hasOwnProperty('rateTypeId') ? (store.rateId.rateTypeId.name === rateTypeId.name) : false}
                        />
                        <label htmlFor={rateTypeId.name}>{rateTypeId.name}, {price}₽/{rateTypeId.unit}</label>
                    </div>
                )
            })}
        </div>
    )
}