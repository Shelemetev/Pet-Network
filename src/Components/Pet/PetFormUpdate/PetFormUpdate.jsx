import { Formik } from 'formik';
import s from './PetFormUpdate.module.css'
import React, { useEffect } from 'react';

const PetFormUpdate = React.memo(({setUpdateActive,number,dataPet,updatePetDataThunk,startLoader}) => {

    const onSubmit = (values, { setSubmitting }) => {
        updatePetDataThunk(values)
        setSubmitting(false)
        setUpdateActive(false)
        startLoader()
    }

    let initialValues 

    
        dataPet.map(item => {
            if (number === item.id) {
                initialValues = {
                    id: item.id,
                    category: {
                        id: item.category.id,
                        name : item.category.name
                    },
                    name: item.name,
                    photoUrsl: [
                        item.photoUrsl
                    ],
                    tags:[
                        {
                          id: item.tags.id,
                          name: item.tags.name
                        }
                    ],
                    status : item.status
                }
            }
        }
        )

    

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
                        <button onClick={() => setUpdateActive(false)} className={s['form__btn-exit']}></button>
                        <p className={s.form__text}>category id</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="category.id" onChange={handleChange} value={values.category.id} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>category name</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="category.name" onChange={handleChange} value={values.category.name} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>pet name</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="name" onChange={handleChange} value={values.name} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>tags id</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="tags[0].id" onChange={handleChange} value={values.tags[0].id} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>tags name</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="tags[0].name" onChange={handleChange} value={values.tags[0].name} onBlur={handleBlur} />
                        </div>
                        <p className={s.form__text}>status</p>
                        <div className={s['form__input-box']}>
                            <input className={s.form__input} type="text" name="status" onChange={handleChange} value={values.status} onBlur={handleBlur} />
                        </div>
                        <button type='submit' className={s.form__btn} disabled={isSubmitting}>
                            Создать
                        </button>
                    </form>
                </div>
            )}
        </Formik>
    )

})

export default PetFormUpdate