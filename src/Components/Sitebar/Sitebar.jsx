import React from 'react';
import s from './Sitebar.module.css'
import { useState } from 'react';
import burgerMenu from '../../img/burger-menu.svg'
import door from '../../img/door.svg'
import { NavLink } from 'react-router-dom';

const Sitebar = React.memo(({username,logoutThunk, startLoader , stopLoader}) => {

    let[activeMode,setMode]=useState(false)

    let[start,startActive]=useState(false)

    let[xPosition,setXPosition]=useState(20.2)

    let[yPosition,setYPosition]=useState(25)

    let setActive = ({isActive}) => isActive ? s['sitebar__link'] : s['sitebar__link--active'] 

    // let setClick = ({isActive}) => (!isActive && startLoader())

    return (
        <div className={s.sitebar}>
            <button onDragOver={(e) => {setXPosition(e.clientX - 23);setYPosition(e.clientY - 23)}} style={{left:`${xPosition}px`, top:`${yPosition}px`}} onClick={() => {activeMode ? setMode(false) : setMode(true); startActive(true)}} className={s.sitebar__button}>
                <img className={s['sitebar__button-img']} src={burgerMenu} alt="" />
            </button>
            <div style={activeMode ? {display:'block'} : {display:'none'}} className={`${s['sitebar__wrapper']} ${start && (activeMode ? s.sitebar__active : s.sitebar__disactive)}`}></div>
            <div className={`${s.sitebar__menu} ${start && (activeMode ? s['sitebar__menu-active'] : s['sitebar__menu-disactive'])}`}>
                <div className={s['sitebar__menu-box']}>
                    <p className={s['sitebar__menu-username']}>{username}</p>
                    <button onClick={() => {startLoader();logoutThunk()}} className={s['sitebar__menu-btn']}>
                        <img className={s['sitebar__menu-btn--box']} src={door} alt="" />
                    </button>
                </div>  
                <div className={s['sitebar__link-box']}>
                    <NavLink to={'/'} onClick={() => startLoader()} className={setActive}>Profile</NavLink>
                    <NavLink to={'/store'} onClick={() => startLoader()} className={setActive}>Store</NavLink>
                    <NavLink to={'/pet'} onClick={() => startLoader()} className={setActive}>My Pet</NavLink>
                </div>
            </div>
        </div>
    )
})

export default Sitebar