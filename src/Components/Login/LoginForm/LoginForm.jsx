import React from "react";
import s from './LoginForm.module.css'
import { Formik } from 'formik';

const LoginForm = React.memo(({loginThunk,startLoader}) => {
 
    const onSubmit = (values, { setSubmitting }) => {
        startLoader()
        loginThunk(values);
        setSubmitting(false)
    }

    const initialValues = {
        username: '',
        password: ''
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
       }) => (
         <form className={s.form} onSubmit={handleSubmit}>
            <p className={s.form__text}>username</p>
            <div className={s['form__input-box']}>
                <input className={s.form__input} type="text" name="username" onChange={handleChange} value={values.username} onBlur={handleBlur} /> 
            </div>
            <p className={s.form__text}>password</p>
            <div className={s['form__input-box']}>
                <input className={s.form__input} type="text" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} /> 
            </div>
            <button className={s.form__btn} disabled={isSubmitting}>
                Войти
            </button>
         </form>
       )}
        </Formik>
    )
})

export default LoginForm