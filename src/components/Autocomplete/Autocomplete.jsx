import React from 'react';
import classes from './Autocomplete.module.scss'
import PropTypes from 'prop-types'
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import {useDispatch} from "react-redux";
import {addCityInStore, addPointInStore} from "../../redux/actions/actions";
import iconClear from "../../assets/icon-clear.svg";

export default function Autocomplete({currentArray, id, currrentlabel, currentText}) {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id,
        options: currentArray,
        getOptionLabel: (option) => option.hasOwnProperty('address') ? option.address : option.name,
    });
    const dispatch = useDispatch();

    const renderElemLi = (params, index) => {
        if (params.hasOwnProperty('address')) {
            return(
                <li {...getOptionProps({ params, index })}>
                    <span onClick={() => dispatch(addPointInStore(params))}>{params.address}</span>
                </li>
            )
        }
        return (
            <li {...getOptionProps({ params, index })}>
                <span onClick={() => {
                    dispatch(addPointInStore({}));
                    return dispatch(addCityInStore(params));
                }}>{params.name}</span>
            </li>
        )
    };

    return (
        <div className={classes.wrapper}>
            <div {...getRootProps()}>
                <label {...getInputLabelProps()}>
                    {currrentlabel}:
                </label>
                <input {...getInputProps()}
                       placeholder={`Начните вводить ${currrentlabel.charAt(0).toLowerCase() + currrentlabel.slice(1, 5)}...`}
                />
                <div className={classes.wrapper__ulElem}>
                    {groupedOptions.length > 0 ? (
                        <ul {...getListboxProps()}>
                            {groupedOptions.map((option, index) => renderElemLi(option, index))}
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

Autocomplete.propTypes = {
    id: PropTypes.string.isRequired,
    currentArray: PropTypes.array.isRequired,
    currrentlabel: PropTypes.string.isRequired,
    currentText: PropTypes.string.isRequired,
};