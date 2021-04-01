import React from 'react'
import '../../styles/styleFormRadio.scss'


export default function () {
    return(
        <div className="form_radio">
            <input
                id="radio-1"
                type="radio"
                name="radio"
                value=""
                checked={ true }
            />
            <label htmlFor="radio-1">Любой</label>
        </div>
    )
}