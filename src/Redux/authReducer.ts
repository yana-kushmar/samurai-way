import {authAPI} from "../API/api";

const SET_USER_DATA = "/auth/SET_USER_DATA"
const SET_LOGIN_USER = "/auth/SET_LOGIN_USER"


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
export const getAuthUserDataTC =  (): any => {
    return async (dispatch: any) => {
        const data = await authAPI.me()
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))
                }
    }
}

export const loginTC = (data: any): any => {
    return async (dispatch: any) => {
        const res = await authAPI.login(data)
                if (res.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(true))
                }else {
                    console.log(res.data.messages)
                    dispatch(res.data.messages[0])

                }
    }
}

export const logOutTC = () =>  {
    return async (dispatch: any) => {
       const data =  await authAPI.logOut()
                if (data.data.resultCode === 0) {
                    dispatch(setIsLoggedInAC(false))
                }
    }
}
export default authReducer