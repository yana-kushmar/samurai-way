import {UsersAPI} from "../API/api";

const SET_USER_DATA = "SET_USER_DATA"





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
    type: string
    data: DataType
}


    //типизация action если я не знаю какие ключи и какие у них значения
    //[x: string]: any

let initialState ={
        id: null,
        email: "" ,
        login: "",
    isAuth: false
}


const authReducer = (state: AuthStateType = initialState, action: AuthAT) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.data,
                isAuth: true
                    }

        default:
            return state
    }

}


export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = (id: number, email: string, login: string) => {
    return (dispatch: any) => {
        UsersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login))
                }

            })
    }
}



export default authReducer