import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {
    // recuerdo la última página visitada, la grabo en el localstore
    // localStorage.setItem("lastPath", rest.location.pathname);

    return (
        <Route {...rest}
            component={(props) => (
                (isLoggedIn)
                    ? (<Component {...props} />)
                    : (<Redirect to="/auth/login" />)
            )}

        />
    )
}

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}