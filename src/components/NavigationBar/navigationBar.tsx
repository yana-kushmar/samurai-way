import React from "react";
import s from './navigationBarCSS.module.css'
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={s.activeLink}>Settings</NavLink>
            </div>
        </nav>

    )
}

export default NavigationBar
