import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addTankInStore, addCharInStore, addRightHandDrive} from '../../actions/actions'
import styleCheckbox from './Checkbox.module.scss'

export default function () {
    const dispatch = useDispatch();
    const orderChecked = useSelector(state => state.storeReducer);

    return(
        <div className={styleCheckbox.checkbox__items}>
            <input
                type="checkbox"
                id="fullTank"
                name="fullTank"
                value=""
                onChange={() => dispatch(addTankInStore())}
                checked={(orderChecked.isFullTank)}
            />
            <label htmlFor="fullTank">Полный бак, 500р</label>

            <input
                type="checkbox"
                id="babyArmchar"
                name="babyArmchar"
                value=""
                onChange={() => dispatch(addCharInStore())}
                checked={(orderChecked.isNeedChildChair)}
            />
            <label htmlFor="babyArmchar">Детское кресло, 200р</label>

            <input
                type="checkbox"
                id="rightHandDrive"
                name="rightHandDrive"
                value=""
                onChange={() => dispatch(addRightHandDrive())}
                checked={(orderChecked.isRightWheel)}
            />
            <label htmlFor="rightHandDrive">Правый руль, 1600р</label>
        </div>
    )
}