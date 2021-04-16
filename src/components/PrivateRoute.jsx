import React from 'react'
import {Redirect, Route} from "react-router";


const PrivateRoute = ({component: Component, ...rest}) => {

    return(
        <Route
            {...rest}
            render={props => (
                !!localStorage.getItem('id')
            )
                ? <Component {...props} />
                : (<Redirect to='/'/>)
            }
        />
    )
};

export default PrivateRoute