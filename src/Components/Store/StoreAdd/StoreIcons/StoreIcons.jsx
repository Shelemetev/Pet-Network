import React from 'react'
import s from './StoreIcons.module.css'

const StoreIcons = React.memo(({category,name,status,data,setDataStorePet}) => {
    return (
        <button onClick={() => setDataStorePet(data)} className={s.store__icon}>
            <div className={s['store__icon-img--box']}>
                <img src="" className={s['store__icon-img']}/>
            </div>
            <p className={s['store__icon-text']}>pet name: {name}</p>
            <p className={s['store__icon-text']}>category: {category}</p>
            <p className={s['store__icon-text']}>status: {status}</p>
        </button>
    )
})

export default StoreIcons