const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


export type UsersStateType = {
    users: UserType[]

}

export type UserType = {

    name: string,
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean

}

type PhotosType = {
    small: string
    large: string
}

export type UsersAT = {
    type: string,
    userId?: number,
    users?: UserType[]


    //типизация action если я не знаю какие ключи и какие у них значения
    //[x: string]: any
}


const usersReducer = (state: UsersStateType, action: UsersAT) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.users]
            }
        default:
            return state
    }

}


export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users})


export default usersReducer