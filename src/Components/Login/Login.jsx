import React from "react"
import s from './Login.module.css'
import {NavLink} from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm';

const Login = React.memo(({loginThunk,startLoader}) => {

    let setActive = ({ isActive }) => (isActive ? s['login__btn--active'] : s['login__btn'])

    return(
        <div className={s.login}>
            <div className={s.login__btns}>        
                <NavLink to={'/'} className={setActive}>LOGIN</NavLink>
                <NavLink to={'/register'} className={setActive}>REGISTER</NavLink>
            </div>
            <LoginForm loginThunk={loginThunk} startLoader={startLoader}/>
        </div>
    )
})

export default Login