import React from 'react';
import LoginContainer from './../Components/Login/LoginContainer';

export const RedirectHOC = (Component) => {
    
    const RedirectComponent = (props) => {
        if(props.statusAuthorization === true) {
            return <Component {...props} />
        } else {
            return <LoginContainer />
        }
    }

    return RedirectComponent
}