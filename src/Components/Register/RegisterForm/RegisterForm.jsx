import React, { useEffect } from 'react'
import s from './RegisterForm.module.css'
import { Formik } from 'formik';
import { useState } from 'react';

const RegisterForm = React.memo(({registredThunk,registerStatus,startLoader}) => {

    let[activeMode, setActiveMode] = useState(false)

    useEffect(() => {
        if(activeMode === true) {
            setTimeout(() => setActiveMode(false),5000)
        }
    }, [activeMode,setActiveMode])

    const registerStart = (values, { setSubmitting }) => {
        startLoader()
        setActiveMode(true)
        registredThunk(values)
        setSubmitting(false)
    }

    const initialValues = {
        username:'',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    }

    return (
        <Formik initialValues={initialValues} onSubmit={registerStart}>
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            }) => (
                <form className={s.form} onSubmit={handleSubmit}>
                    {activeMode ? (registerStatus? <div className={s['status--true']}>you have successfully logged in</div> : <div className={s['status--false']}>Registration failed</div>) : (<></>)}
                    <p className={s.form__text}>username</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="username" onChange={handleChange} value={values.username} onBlur={handleBlur} /> 
                    </div>
                    <p className={s.form__text}>firstName</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="firstName" onChange={handleChange} value={values.firstName} onBlur={handleBlur} />
                    </div>
                    <p className={s.form__text}>lastName</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="lastName" onChange={handleChange} value={values.lastName} onBlur={handleBlur} /> 
                    </div>
                    <p className={s.form__text}>email</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} /> 
                    </div>
                    <p className={s.form__text}>password</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} /> 
                    </div>
                    <p className={s.form__text}>phone</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="phone" onChange={handleChange} value={values.phone} onBlur={handleBlur} /> 
                    </div>
                    <button className={s.form__btn} type="submit" disabled={isSubmitting}>Register!</button>
                </form >    
            )}
        </Formik>
    )
})

export default RegisterForm

