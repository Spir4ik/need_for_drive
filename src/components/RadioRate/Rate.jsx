import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styleRate from './Rate.module.scss'
import {addRate, addRateInStore} from '../../actions/actions'

export default function () {
    const dispatch = useDispatch();
    const rate = useSelector(state => state.rateReducer.rate);
    const rateId = useSelector(state => state.storeReducer.rateId);
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
                            checked={rateId.hasOwnProperty('rateTypeId') ? (rateId.rateTypeId.name === rateTypeId.name) : false}
                        />
                        <label htmlFor={rateTypeId.name}>{rateTypeId.name}, {price}₽/{rateTypeId.unit}</label>
                    </div>
                )
            })}
        </div>
    )
}