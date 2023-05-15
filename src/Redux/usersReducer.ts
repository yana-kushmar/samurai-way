const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const IS_FETCHING = "IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"


export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]


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
    currentPage?: number
    totalCount?: number
    isFetching?: boolean
    followingInProgress?: number[]



    //типизация action если я не знаю какие ключи и какие у них значения
    //[x: string]: any
}
let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 8,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: [],
}


const usersReducer = (state: UsersStateType = initialState, action: UsersAT) => {

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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }

}


export const follow = (userId: number) => ({type: FOLLOW, userId})
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const setIsFetching = (isFetching: boolean) => ({type: IS_FETCHING, isFetching})
export const setFollowingInProgress = (isFetching: boolean, userId: number) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})


export default usersReducer