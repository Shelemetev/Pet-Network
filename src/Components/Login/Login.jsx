import React from "react"
import s from './Login.module.css'
import {NavLink} from 'react-router-dom'

let setActive = ({ isActive }) => (isActive ? s['login__btn--active'] : s['login__btn'])

const Login = React.memo(() => {
    return(
        <div className={s.login}>
            <div className={s.login__btns}>        
                <NavLink to={'/'} className={setActive}>LOGIN</NavLink>
                <NavLink to={'/refister'} className={setActive}>REGISTER</NavLink>
            </div>
        </div>
    )
})

export default Login