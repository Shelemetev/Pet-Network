import  React, { useEffect, useState }  from 'react';
import s from './Store.module.css'
import StoreForm from './StoreForm/StoreForm';

const Store = React.memo(({statusAuthorization,stopLoader,getInventoryThunk,dataStatus,dataStatusFounding}) => {

    useEffect(() => {
        stopLoader()
    },[stopLoader])

    useEffect(() => {
        if (dataStatusFounding === false) {
            getInventoryThunk()
        }
    },[dataStatusFounding])

    let[activeMode,setActiveMode] = useState(false)

    return (
        <div className={s.store}>
            <div className={s.store__status}>
                <p className={s['store__status-text']}>sold: {dataStatus.sold}</p>
                <p className={s['store__status-text']}>string: {dataStatus.string}</p>
                <p className={s['store__status-text']}>pending: {dataStatus.pending}</p>
                <p className={s['store__status-text']}>available: {dataStatus.available}</p>
                <p className={s['store__status-text']}>not available: {dataStatus['not available']}</p>
            </div>
            <div className={s.store__inner}>
                <button onClick={() => setActiveMode(true)} className={s['store__inner-btn']}></button>
            </div>
            {activeMode && <StoreForm setActiveMode={setActiveMode}/>}
        </div>
    )
})

export default Store