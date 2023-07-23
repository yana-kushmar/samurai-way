import {UsersAPI} from "../API/api";
import {ActionsType} from "./types";

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
export type SetUsersAT = {
    users?: UserType[]

    //типизация action если я не знаю какие ключи и какие у них значения
    //[x: string]: any
}
const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 8,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: [],
}

type FollowUnfollowSuccessAT={
    userId: number
}

type SetCurrentPageAT = {
    currentPage: number
}
type SetUserTotalCountAT = {
    totalCount: number
}
type SetIsFetchingAT = {
    isFetching: boolean
}
type SetFollowingInProgressAT = {
    isFetching: boolean
    userId: number
}

type UsersReducerAT = ActionsType<SetUsersAT & FollowUnfollowSuccessAT & SetCurrentPageAT & SetUserTotalCountAT & SetIsFetchingAT & SetFollowingInProgressAT>



const usersReducer = (state: UsersStateType = initialState, action: UsersReducerAT) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.payload.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.payload.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload.totalCount
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }

        default:
            return state
    }

}




export const followSuccess = (userId: number): ActionsType<FollowUnfollowSuccessAT> => ({type: FOLLOW, payload: {userId}})
export const acceptUnfollow = (userId: number):  ActionsType<FollowUnfollowSuccessAT> => ({type: UNFOLLOW, payload: {userId}})
export const setUsers = (users: UserType[]): ActionsType<SetUsersAT> => ({type: SET_USERS, payload: {users}})
export const setCurrentPage = (currentPage: number): ActionsType<SetCurrentPageAT> => ({type: SET_CURRENT_PAGE, payload: {currentPage}})
export const setUsersTotalCount = (totalCount: number): ActionsType<SetUserTotalCountAT> => ({type: SET_USERS_TOTAL_COUNT, payload: {totalCount}})
export const setIsFetching = (isFetching: boolean): ActionsType<SetIsFetchingAT> => ({type: IS_FETCHING, payload: {isFetching}})
export const setFollowingInProgress = (isFetching: boolean, userId: number): ActionsType<SetFollowingInProgressAT> => ({type: FOLLOWING_IN_PROGRESS, payload: {isFetching, userId}})


///thunk
export const getUsersTC = (currentPage: number, pageSize: number): any =>{
    return (dispatch: any) => {
        dispatch(setIsFetching(true))
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            })

    }
}
export const follow = (userId: number) =>{

    return (dispatch: any) => {
        dispatch(setFollowingInProgress(true, userId))
        UsersAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setFollowingInProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number) =>{

    return (dispatch: any) => {
        dispatch(setFollowingInProgress(true, userId))
        UsersAPI.unfollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                 dispatch(acceptUnfollow(userId))
                }
                dispatch(setFollowingInProgress(false, userId))
            })
}}


export default usersReducer