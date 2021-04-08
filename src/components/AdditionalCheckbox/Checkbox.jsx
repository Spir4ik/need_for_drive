import React from 'react'
import {useDispatch} from "react-redux";
import {addTankInStore, addCharInStore, addRightHandDrive} from '../../actions/actions'
import styleCheckbox from './Checkbox.module.scss'

export default function () {
    const dispatch = useDispatch();

    return(
        <div className={styleCheckbox.checkbox__items}>

            <input
                type="checkbox"
                id="fullTank"
                name="fullTank"
                value=""
                onChange={() => dispatch(addTankInStore())}
            />
            <label htmlFor="fullTank">Полный бак, 500р</label>

            <input
                type="checkbox"
                id="babyArmchar"
                name="babyArmchar"
                value=""
                onChange={() => dispatch(addCharInStore())}
            />
            <label htmlFor="babyArmchar">Детское кресло, 200р</label>

            <input
                type="checkbox"
                id="rightHandDrive"
                name="rightHandDrive"
                value=""
                onChange={() => dispatch(addRightHandDrive())}
            />
            <label htmlFor="rightHandDrive">Правый руль, 1600р</label>
        </div>
    )
}