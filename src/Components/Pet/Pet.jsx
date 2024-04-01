import React, { useEffect, useState } from 'react';
import s from './Pet.module.css'
import PetFormAdd from './PetForm/PetFormAdd';
import PetIcons from './PetIcons/PetIcons';
import PetFormUpdate from './PetFormUpdate/PetFormUpdate';

const Pet = React.memo(({stopLoader,addPetThunk,startLoader,dataPet,updatePhotoPetThunk,updatePetDataThunk}) => {

    let[addActive, setAddActive] = useState(false)

    let[updateActive, setUpdateActive] = useState(false)

    let[number, setNumber] = useState(0)

    useEffect(() => {
        stopLoader()
    },[stopLoader])

    return (
        <div className={s.pet}>
            <div className={s.pet__top}>
                <button onClick={() => setAddActive(true)} className={s['pet__top-btn--add']}></button>
                <button className={s['pet__top-btn--delete']}></button>
            </div>
            <div className={s.pet__bottom}>
                <div className={s['pet__bottom-inner']}>
                    {dataPet.map((item) => <PetIcons setNumber={setNumber} setUpdateActive={setUpdateActive} key={item.id} updatePhotoPetThunk={updatePhotoPetThunk} id={item.id} status={item.status} category={item.category.name} img={item.photoUrls} name={item.name} />)}
                </div>
            </div>
            {addActive && <PetFormAdd startLoader={startLoader} addPetThunk={addPetThunk} setAddActive={setAddActive} />}
            {updateActive && <PetFormUpdate startLoader={startLoader} updatePetDataThunk={updatePetDataThunk} dataPet={dataPet} number={number} setUpdateActive={setUpdateActive} />}
        </div>
    )
})

export default Pet