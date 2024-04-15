import React from "react"
import s from './StoreAdd.module.css'
import StoreIcons from './StoreIcons/StoreIcons';

const StoreAdd = React.memo(({setActiveMode,dataPet,setDataStorePet}) => {
    return (
        <div className={s['store__menu-wrapper']}>
            <div className={s.store__menu}>
                <div className={s['store__menu-inner']}>
                    {dataPet.map((item) => <StoreIcons data={item} setDataStorePet={setDataStorePet} name={item.name} category={item.category.name} status={item.status}/>)}       
                </div>
                <button onClick={() => setActiveMode(false)} className={s['store__icon-btn']}></button>
            </div>
        </div>
    )
})

export default StoreAdd