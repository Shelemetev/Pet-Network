import React from "react"
import s from './ProfileForm.module.css'
import { Formik } from "formik"

const ProfileForm = React.memo(({setEditMode,data,changeDataThunk,startLoader,deleteUserThunk}) => {

    const onSubmit = (values, { setSubmitting }) => {
        startLoader()
        changeDataThunk(data.username, values)
    }

    const initialValues = {
        id: 8888,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        userstatus: 0
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
                <button onClick={() => setEditMode(true)} className={s['form__btn-exit']} type='button'></button> 
                <button onClick={() => {startLoader();deleteUserThunk(data.username)}} className={s['form__btn-delete']} type='button'>
                    <p className={s['form__btn-delete--text']}>DELETE PROFILE</p> 
                </button>
                <p className={s.form__text}>first</p>
                <div className={s['form__input-box']}>
                    <input className={s.form__input} type="text" name="firstName" onChange={handleChange} value={values.firstName} onBlur={handleBlur} />
                </div>
                <p className={s.form__text}>lastName</p>
                <div className={s['form__input-box']}>
                    <input className={s.form__input} type="text" name="lastName" onChange={handleChange} value={values.lastName} onBlur={handleBlur} /> 
                </div>
                <p className={s.form__text}>username</p>
                <div className={s['form__input-box']}>
                    <input className={s.form__input} type="text" name="username" onChange={handleChange} value={values.username} onBlur={handleBlur} /> 
                </div>
                <p className={s.form__text}>email</p>
                <div className={s['form__input-box']}>
                    <input className={s.form__input} type="text" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} /> 
                </div>
                <p className={s.form__text}>phone</p>
                <div className={s['form__input-box']}>
                    <input className={s.form__input} type="text" name="phone" onChange={handleChange} value={values.phone} onBlur={handleBlur} /> 
                </div>
                <p className={s.form__text}>password</p>
                <div className={s['form__input-box']}>
                    <input className={s.form__input} type="text" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} /> 
                </div>
                <button className={s.form__btn} type='submit'>Изменить</button>
            </form>
       )}
        </Formik>
    )
})

export default ProfileForm