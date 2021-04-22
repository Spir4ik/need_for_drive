import React from "react";
import {useSelector} from "react-redux";
import storeSelector from "../redux/selectors/storeSelector"
import { Route, Redirect } from "react-router-dom";

export default function ({ component: Component, ...rest }) {
    const store = useSelector(storeSelector())
    return (
        <Route
            {...rest}
            render={props =>
                store.cityId.hasOwnProperty('name') ? (
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