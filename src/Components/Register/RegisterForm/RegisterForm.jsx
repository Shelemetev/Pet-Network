import React, { useEffect } from 'react'
import s from './RegisterForm.module.css'
import { Formik } from 'formik';
import { useState } from 'react';

const RegisterForm = React.memo(({registredThunk,registerStatus,startLoader}) => {

    let[activeMode, setActiveMode] = useState(false)

    let[id, setId] = useState(Math.floor(Math.random() * 10000))

    useEffect(() => {
        if(activeMode === true) {
            setTimeout(() => setActiveMode(false),5000)
        }
    }, [activeMode,setActiveMode])

    const registerStart = (values, { setSubmitting }) => {
        // let object = {
        //     id: 800,
        //     username: values.username,
        //     firstName: values.firstName,
        //     lastName: values.lastName,
        //     email: values.email,
        //     password: values.password,
        //     phone: values.phone,
        //     userStatus: 0
        // }
        startLoader()
        setActiveMode(true)
        registredThunk(values)
        setSubmitting(false)
    }

    const initialValues = {
        id: id,
        username:'',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        userStatus: 0
    }

    return (
        <Formik initialValues={initialValues} onSubmit={registerStart}
            validate={values => {
                const errors = {}
                if (!values.username) {
                    errors.username = "Enter the user name"
                } 
                if (!values.firstName) {
                    errors.firstName = "Enter the firstname" 
                }
                if (!values.lastName) {
                    errors.lastName = "Enter the lastName"
                }
                if (!values.email) {
                    errors.email = "Enter the email"
                }
                if (!values.password) {
                    errors.password = "Enter the password"
                }
                return errors
            }}
        >
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
                    <div className={s.error__box}>
                        <p className={s.error__text}>{errors.username}</p>
                    </div>
                    <p className={s.form__text}>firstName</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="firstName" onChange={handleChange} value={values.firstName} onBlur={handleBlur} />
                    </div>
                    <div className={s.error__box}>
                        <p className={s.error__text}>{errors.firstName}</p>
                    </div>
                    <p className={s.form__text}>lastName</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="lastName" onChange={handleChange} value={values.lastName} onBlur={handleBlur} /> 
                    </div>
                    <div className={s.error__box}>
                        <p className={s.error__text}>{errors.lastName}</p>
                    </div>
                    <p className={s.form__text}>email</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} /> 
                    </div>
                    <div className={s.error__box}>
                        <p className={s.error__text}>{errors.email}</p>
                    </div>
                    <p className={s.form__text}>password</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} /> 
                    </div>
                    <div className={s.error__box}>
                        <p className={s.error__text}>{errors.password}</p>
                    </div>
                    <p className={s.form__text}>phone</p>
                    <div className={s['form__input-box']}>
                        <input className={s.form__input} type="text" name="phone" onChange={handleChange} value={values.phone} onBlur={handleBlur} /> 
                    </div>
                    <div className={s.error__box}>
                        <p className={s.error__text}></p>
                    </div>
                    <button className={s.form__btn} type="submit" disabled={isSubmitting}>Register!</button>
                </form >    
            )} 
        </Formik>
    )
})

export default RegisterForm

