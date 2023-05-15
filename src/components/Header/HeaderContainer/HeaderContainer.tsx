import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Header from "../Header";
import axios from "axios";
import {setAuthUserData} from "../../../Redux/authReducer";
import {UsersAPI} from "../../../API/api";


type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

const HeaderContainer = () => {

    const dispatch = useDispatch()
    const {login, id, email,  isAuth} = useSelector<any, AuthType>(state  => state.auth)

        useEffect(() => {
            UsersAPI.getAuth()
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthUserData(id, email, login))
                    }

                })
        }, [])
    return <Header
        login={login}
        isAuth={isAuth}
    />
}

// const mapStateToProps = (state: any) => {
//     isAuth: state.auth.isAuth
//     login: state.auth.isAuth
//
// }


export default HeaderContainer