import React, { useEffect, useState } from "react"
import s from './Profile.module.css'
import Client from '../../img/Client.png'
import PencilBox from '../../img/pencil-box.svg'
import ProfileForm from './ProfileForm/ProfileForm';

const Profile = React.memo(({statusAuthorization,stopLoader,data,changeDataThunk,startLoader,deleteUserThunk}) => {

    let[editMode,setEditMode] = useState(true)
    
    useEffect(() => {
        stopLoader()
    },[stopLoader])

    return (
        <div className={s.profile}>
            <div className={s['profile__img-box']}>
                <img src={Client} className={s.profile__img} />
            </div>
            {editMode ? 
            <div className={s.profile__data}>
                <div className={s['profile__name-box']}>
                    <p className={s.profile__name}>{`${data.firstName} ${data.lastName}`}</p>
                    <button onClick={() =>{ setEditMode(false)}} className={s['profile__name-btn']}>
                        <img src={PencilBox} className={s['profile__name-btn--img']} />
                    </button>
                </div>
                <p className={s.profile__text}>username: {`${data.username}`}</p>
                <a href={`mailto:${data.email}`} className={s.profile__text}>email: {`${data.email}`}</a>
                <p className={s.profile__text}>phone: {`${data.phone}`}</p>
            </div>
            :
            <ProfileForm startLoader={startLoader} deleteUserThunk={deleteUserThunk} changeDataThunk={changeDataThunk} setEditMode={setEditMode} data={data} />
            }
        </div>
    )
})

export default Profile