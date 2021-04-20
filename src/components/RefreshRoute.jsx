import React from "react";
import {useSelector} from "react-redux";
import selector from "../redux/selectors/selectors.js";
import { Route, Redirect } from "react-router-dom";

export default function ({ component: Component, ...rest }) {
    const selectors = selector(useSelector).store;
    return (
        <Route
            {...rest}
            render={props =>
                selectors.cityId.hasOwnProperty('name') ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/carreservation"
                        }}
                    />
                )
            }
        />
    )
}