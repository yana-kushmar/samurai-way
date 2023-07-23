import { Dispatch } from "redux";
import {authAPI, UsersAPI} from "../API/api";

const SET_USER_DATA = "SET_USER_DATA"
const SET_LOGIN_USER = "SET_LOGIN_USER"




type AuthStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}

type DataType = {
    userId: number
    email: string
    login: string

}

type AuthAT = {
    isAuth: boolean
    type: string
    data: DataType
}


//типизация action если я не знаю какие ключи и какие у них значения
//[x: string]: any
let initialState = {
    id: null,
    email: "",
    login: "",
    rememberMe: false,
    isAuth: false,

}


const authReducer = (state: AuthStateType = initialState, action: AuthAT) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN_USER:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }

}

//action
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const )

export const setIsLoggedInAC = (isAuth: boolean) => ({type: SET_LOGIN_USER, isAuth} as const)


//thunk
export const getAuthUserDataTC = (): any => {
    return (dispatch: any) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))
                }
            })
    }
}

export const loginTC = (data: any): any => {
    return (dispatch: any):any => {
        authAPI.login(data)
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(true))
                }else {
                    console.log(data.data.messages)
                    dispatch(data.data.messages[0])///// bcghfdbnm

                }
            })
    }
}

export const logOutTC = () =>  {
    return (dispatch: any) => {
        authAPI.logOut()
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(false))
                }
            })
    }
}
export default authReducer