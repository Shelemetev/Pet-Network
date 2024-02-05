import React from "react"
import s from './Login.module.css'

const Login = React.memo(() => {
    return(
        <div className={s.login}>
            <div className={s.login__btns}>
                <div className={s['login__btn']}>
                    <p className={s['login__btn-text']}>LOGIN</p>
                </div>
                <div className={s['login__btn']}>
                    <p className={s['login__btn-text']}>REGISTER</p>
                </div>
            </div>
        </div>
    )
})

export default Login