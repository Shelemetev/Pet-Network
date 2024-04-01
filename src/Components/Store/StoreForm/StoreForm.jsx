import React from "react"
import { Formik } from 'formik';
import s from './StoreForm.module.css'

const StoreForm = React.memo(({setActiveMode}) => {
    return (
        <div className={s.form_wrapper}>
            <Formik
                initialValues={{}}
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
                        <button onClick={() => setActiveMode(false)} className={s['form__btn-exit']} type="button"></button>
                        <p className={s.form__text}>first</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="firstName" onChange={handleChange} value={values.firstName} onBlur={handleBlur} />
                        </div>
                        <button className={s.form__btn} type='submit'>Создать</button>
                    </form>
                )}
            </Formik>
        </div>
    )
})

export default StoreForm