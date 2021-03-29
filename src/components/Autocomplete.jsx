import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from "react-redux";

export default function Autocomplete({textLabel, arrayUl, id, currentText}) {
    const [text, setText] = useState(currentText ? currentText : '');
    const [showUl, setShowUl] = useState(false);
    const dispatch = useDispatch();
    const addInStore = useCallback((type, payload) => dispatch({type: type, payload: payload}));

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
    }, []);

    const handleClickOutside = event => {
        return event.target.tagName !== 'INPUT' ? setShowUl(false) : null
    };

    const renderElemUl = () => {
        return(
            <ul>
                {arrayUl.map(({name, id, address}) => {
                    return address ? (address.includes(text) ?
                        <li key={id} onClick={() => {
                            setText(address);
                            setShowUl(false);
                            addInStore("GET_POINT", {pointId: {address, id}});
                        }}>{address}</li>
                        :
                        null)
                        :
                        (name.includes(text) ?
                        <li key={id} onClick={() => {
                            setText(name);
                            setShowUl(false);
                            addInStore("GET_CITY", {cityId: {name, id}})
                        }}>{name}</li>
                        :
                        null)
                })}
            </ul>
        )
    };

    return(
        <>
            {textLabel ? <label htmlFor={id}>{textLabel}</label> : null}
            <input type="text"
                   className="form-control"
                   id={id}
                   autoComplete="off"
                   onChange={(e) => setText(e.target.value)}
                   onClick={() => setShowUl(true)}
                   value={text}
                   placeholder="Начните вводить город ..."
            />
            <span onClick={() => setText('')}>х</span>
            {showUl && renderElemUl()}
        </>
    )
}

Autocomplete.propTypes = {
    textLabel: PropTypes.string,
    arrayUl: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    currentText: PropTypes.string
};