import React from 'react';
import Login from './../Components/Login/Login';

export const RedirectHOC = (Component) => {
    
    const RedirectComponent = (props) => {
        if(props.statusAuthorization === true) {
            return <Component />
        } else {
            return <Login />
        }
    }

    return RedirectComponent
}