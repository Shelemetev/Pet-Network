import React, { useState } from "react"
import s from './PetFormAdd.module.css'
import { Formik } from "formik"

const PetFormAdd = React.memo(({setAddActive,addPetThunk,startLoader}) => {

    

    const onSubmit = (values, { setSubmitting }) => {
        startLoader()
        addPetThunk(values)
        setSubmitting(false)
    }

    const initialValues = {
        id: 0,
        category: {
            id: 0,
            name : ''
        },
        name: '',
        photoUrsl: [
            ''
        ],
        tags:[
            {
              id: 0,
              name: ""
            }
        ],
        status : "available"
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
                <div className={s.form__wrapper}>
                    <form className={s.form} onSubmit={handleSubmit}>
                        <button onClick={() => setAddActive(false)} className={s['form__btn-exit']}></button>
                        <p className={s.form__text}>id</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="id" onChange={handleChange} value={values.username} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>category id</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="category.id" onChange={handleChange} value={values.username} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>category name</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="category.name" onChange={handleChange} value={values.username} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>pet name</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="name" onChange={handleChange} value={values.username} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>tags id</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="tags[0].id" onChange={handleChange} value={values.username} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>tags name</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="tags[0].name" onChange={handleChange} value={values.username} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>status</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="status" onChange={handleChange} value={values.username} onBlur={handleBlur} />
                        </div>
                        <button className={s.form__btn} disabled={isSubmitting}>
                            Создать
                        </button>
                    </form>
                </div>
            )}
        </Formik>
    )
})

export default PetFormAdd