import React from 'react';
import s from './StoreSold.module.css'

const StoreSold = React.memo(({}) => {
    return (
        <div className={s.store__icon}>
            <div className={s['store__icon-img--box']}>
                <img src="" className={s['store__icon-img']}/>
            </div>
            <p className={s['store__icon-text']}>pet name: </p>
            <p className={s['store__icon-text']}>category: </p>
            <p className={s['store__icon-text']}>status: </p>
        </div>
    )
})

export default StoreSold