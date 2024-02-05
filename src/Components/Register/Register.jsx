import React from "react"
import s from './Register.module.css'
import {NavLink} from 'react-router-dom'

const Register = React.memo((props) => {

    let setActive = ({ isActive }) => (isActive ? s['register__btn--active'] : s['register__btn'])

    return (
        <div className={s.register}>
            <div className={s.register__btns}>        
                <NavLink to={'/'} className={setActive}>LOGIN</NavLink>
                <NavLink to={'/register'} className={setActive}>REGISTER</NavLink>
            </div>
        </div>
    )
})

export default Register