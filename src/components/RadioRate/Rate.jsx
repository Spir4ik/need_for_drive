import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styleRate from './Rate.module.scss';
import selector from "../../redux/selectors/selectors";
import {addRate, addRateInStore} from '../../redux/actions/actions'

export default function () {
    const dispatch = useDispatch();
    const selectors = selector(useSelector);
    useEffect(() => dispatch(addRate()), []);

    return(
        <div className={styleRate.rate__item}>
            {selectors.rate.map(({rateTypeId, price, id}) => {
                return(
                    <div className={styleRate.rate__radio} key={id}>
                        <input
                            id={rateTypeId.name}
                            type="radio"
                            name="test"
                            value=""
                            onChange={() => dispatch(addRateInStore({rateTypeId, price, id}))}
                            checked={selectors.store.rateId.hasOwnProperty('rateTypeId') ? (selectors.store.rateId.rateTypeId.name === rateTypeId.name) : false}
                        />
                        <label htmlFor={rateTypeId.name}>{rateTypeId.name}, {price}₽/{rateTypeId.unit}</label>
                    </div>
                )
            })}
        </div>
    )
}