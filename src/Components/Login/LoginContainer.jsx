import React from "react"
import { connect } from "react-redux"
import Login from './Login';
import { loginThunk } from './../../store/auth-reducer';
import { startLoader, stopLoader } from './../../store/searching-reducer';
import { getError, getStatusAuthorization } from './../../store/store-selectors/auth-selector';

const mapStateToProps = (state) => {
    return {
        error: getError(state),
        statusAuthorization : getStatusAuthorization(state)
    }
}

const LoginContainer = connect(mapStateToProps, 
    {
        loginThunk,
        startLoader,
        stopLoader
    })(Login)

export default LoginContainer