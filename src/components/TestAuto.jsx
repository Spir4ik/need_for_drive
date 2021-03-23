import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useSelector, useDispatch} from "react-redux";

export default function TestAuto({textLabel, arrayUl, id}) {
    const [text, setText] = useState('');
    const [showUl, setShowUl] = useState(false);
    const orders = useSelector(state => state.order);
    const dispatch = useDispatch();

    const renderElemLi = () => {
        return(
            <ul>
                {arrayUl.map(({name, id, address}) => {
                    // const textText = text.charAt(0).toUpperCase() + text.slice(1);
                    // return (name.includes(textText) ?
                    //     <li key={id} onClick={() => {
                    //         setText(name);
                    //         setShowUl(false);
                    //         dispatch({type: "GET_ORDER", payload: {cityId: {name, id}}});
                    //     }}>{name}</li>
                    //     :
                    //     null)
                    return address ? (address.includes(text) ?
                        <li key={id} onClick={() => {
                            setText(address);
                            setShowUl(false);
                            dispatch(
                                {type: "GET_ORDER",
                                    payload: {
                                        pointId: {address, id},
                                        cityId: orders.cityId
                                    }
                                }
                            );
                        }}>{address}</li>
                        :
                        null)
                        :
                        (name.includes(text) ?
                        <li key={id} onClick={() => {
                            setText(name);
                            setShowUl(false);
                            dispatch({type: "GET_ORDER", payload: {cityId: {name, id}}});
                        }}>{name}</li>
                        :
                        null)
                })}
            </ul>
        )
    };

    return(
        <>
            <label htmlFor={id}>{textLabel}:</label>
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
            {showUl && renderElemLi()}
        </>
    )
}

TestAuto.propTypes = {
    textLabel: PropTypes.string,
    arrayUl: PropTypes.array,
    id: PropTypes.string
};