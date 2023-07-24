import React, {memo} from "react";
import s from './HeaderCSS.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logOut: () => void


}

const Header = memo(function (props: HeaderPropsType) {
    return (
        <header className={s.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>

            <div className={s.loginBlock}>

                {props.isAuth
                    ? <button onClick={props.logOut}>Log Out</button>
                    : <NavLink to={'./login'}>Login</NavLink>}

            </div>
    </header>

    )
})

export default Header;