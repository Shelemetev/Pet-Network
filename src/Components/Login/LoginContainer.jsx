import React from "react"
import { connect } from "react-redux"
import Login from './Login';
import { loginThunk } from './../../store/auth-reducer';
import { startLoader } from './../../store/searching-reducer';

const mapStateToProps = (state) => {
    return {
        
    }
}

const LoginContainer = connect(mapStateToProps, 
    {
        loginThunk,
        startLoader
    })(Login)

export default LoginContainer