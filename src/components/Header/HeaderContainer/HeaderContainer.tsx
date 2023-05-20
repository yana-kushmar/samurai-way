import React, {useEffect} from "react";
import { useSelector} from "react-redux";
import Header from "../Header";

import {getAuthUserData, setAuthUserData} from "../../../Redux/authReducer";



type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

const HeaderContainer = () => {

    // const dispatch = useDispatch()
    const {login, id, email,  isAuth} = useSelector<any, AuthType>(state  => state.auth)

        useEffect(() => {
            getAuthUserData(id, email, login)
        }, [])
    return <Header
        login={login}
        isAuth={isAuth}
    />
}

export default HeaderContainer