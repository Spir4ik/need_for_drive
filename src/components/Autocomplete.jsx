import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import iconClear from '../assets/icon-clear.svg'
import storeSelector from "../redux/selectors/storeSelector";
import {
    addCityInStore,
    addPointInStore,
} from "../redux/actions/actions";

export default function Autocomplete({textLabel, arrayUl, id, currentText, currentRef}) {
    const [text, setText] = useState('');
    const store = useSelector(storeSelector());
    const [showUl, setShowUl] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (currentRef.current && !currentRef.current.contains(event.target)) {
                setShowUl(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [currentRef]);

    useEffect(() => {
        setText(currentText);
    }, [currentText]);

    const renderElemUl = () => {
        return(
            <ul>
                {arrayUl.map(({name, id, address}) => {
                    return address ? (address.includes(text) ?
                        <li key={id} onClick={() => {
                            setShowUl(false);
                            dispatch(addPointInStore({address, id, name}))
                        }}>{address}</li>
                        :
                        null)
                        :
                        (name.includes(text) ?
                        <li key={id} onClick={() => {
                            setShowUl(false);
                            dispatch(addCityInStore({name, id}));
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
                   onChange={(e) => setText(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}
                   onClick={() => setShowUl(true)}
                   value={text}
                   ref={currentRef}
                   disabled={id === "point" && !store.cityId.hasOwnProperty('name')}
                   placeholder={`Начните вводить ${textLabel.charAt(0).toLowerCase() + textLabel.slice(1, 5)}...`}
            />
            <div className="clear__item" onClick={() => {
                id === "city" ? dispatch(addCityInStore({})) : dispatch(addPointInStore({}))
            }}>
                <img src={iconClear}
                     alt=""
                />
            </div>
            {showUl && renderElemUl()}
        </>
    )
}

Autocomplete.propTypes = {
    textLabel: PropTypes.string,
    arrayUl: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    currentText: PropTypes.string,
    currentRef: PropTypes.object,
    isDisabled: PropTypes.bool,
};