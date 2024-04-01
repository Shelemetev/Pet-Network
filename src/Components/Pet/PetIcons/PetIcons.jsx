import s from "./PetIcons.module.css";
import React from "react";
import Gear from '../../../img/gear.svg'
import LoadBox from '../../../img/load-box.svg'
import PetFormUpdate from './../PetFormUpdate/PetFormUpdate';

const PetIcons = React.memo(({name,img,category,status,id,updatePhotoPetThunk,setUpdateActive,setNumber}) => {
    return (
        <div className={s.pet__icon}>
            <div src="" className={s['pet__icon-img--box']}>
                <img src={img} className={s['pet__icon-img']} />
            </div> 
            <p className={s['pet__icon-text']}>name:{name}</p>
            <p className={s['pet__icon-text']}>category:{category}</p>
            <p className={s['pet__icon-text']}>status:{status}</p>
            <button onClick={() => {setNumber(id);setUpdateActive(true)}} className={s['pet__icon-btn--update']}>
                <img src={Gear} className={s['pet__icon-btn--img']} />
            </button>
            <input onChange={(e) => updatePhotoPetThunk(e.target.files[0])} type="file" id={`file${id}`} name="file" className={s['pet__icon-file']} data-multiple-caption='{count} файлов выбрано'/>
            <label htmlFor={`file${id}`} className={s['pet__icon-file--lable']}>
                <img src={LoadBox} className={s['pet__icon-file--img']} />
            </label>
        </div>
    )
})

export default PetIcons