import React from "react"
import s from './Register.module.css'
import { NavLink } from 'react-router-dom'
import RegisterForm from './RegisterForm/RegisterForm';


const Register = React.memo(({registredThunk, registerStatus}) => {

    const setActive = ({ isActive }) => (isActive ? s['register__btn--active'] : s['register__btn'])

    return (
        <div className={s.register}>
            <div className={s.register__btns}>
                <NavLink to={'/'} className={setActive}>LOGIN</NavLink>
                <NavLink to={'/register'} className={setActive}>REGISTER</NavLink>
            </div>
            <RegisterForm registerStatus={registerStatus} registredThunk={registredThunk}/>
        </div>
    )
})

export default Register