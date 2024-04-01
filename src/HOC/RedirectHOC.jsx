import React from 'react';
import LoginContainer from './../Components/Login/LoginContainer';

export const RedirectHOC = (Component) => {
    
    const RedirectComponent = React.memo((props) => {
        if(props.statusAuthorization === true) {
            return <Component {...props} />
        } else {
            return <LoginContainer />
        }
    })

    return RedirectComponent
}