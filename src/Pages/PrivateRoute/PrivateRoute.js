import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { firebaseContext } = useAuth();
    const { user, isLoading } = firebaseContext;
    if (isLoading) {
        // spinner
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="info" />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user ? children : <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: location }
                }}
            ></Redirect>}

        >

        </Route>
    );
};

export default PrivateRoute;