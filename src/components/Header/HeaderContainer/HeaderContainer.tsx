import React, {useEffect} from "react";
import Header from "../Header";
import {getAuthUserDataTC, logOutTC} from "../../../Redux/authReducer";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";

type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

const HeaderContainer = () => {

    const dispatch = useAppDispatch()
    const {login, isAuth} = useAppSelector(state  => state.auth)

   const logOut = () => {
        dispatch(logOutTC())
    }


    return <Header
        login={login}
        isAuth={isAuth}
        logOut={logOut}
    />
}

export default HeaderContainer