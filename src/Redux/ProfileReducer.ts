import {profileAPI} from "../API/api";
import {ActionsType} from "./types";

import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./redux-store";
import {loginTC} from "./authReducer";

const ADD_POST = "/profile/ADD-POST"

const SET_USERS_PROFILE = "/profile/SET_USERS_PROFILE"
const SET_USERS_STATUS = "/profile/SET_USERS_STATUS"
const DELETE_POST = "/profile/DELETE_POST"
const SAVE_PHOTO_SUCCESS = "/profile/SAVE_PHOTO_SUCCESS"

type UsersProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: any
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfileReducerStateType = {
    posts: PostType[]
    profile: UsersProfileType | null,
    status: string
    userId?: number | null
    newPostText: string
}

type AddPostAC = {
    text: string
}

type deletePostAC = {
    postId: number
}

type SetUserProfileAC = {
    profile: UsersProfileType
}
type SetUserStatusAC = {
    status: string
}

type SavePhotoSuccessAC = {
    photos: any
}

const initialState: ProfileReducerStateType = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "huy", likesCount: 20},
    ],
    profile: null,
    status: '',
    userId: null,
    newPostText: ""
}
type ProfileReducerAT = ActionsType<AddPostAC & SetUserProfileAC & SetUserStatusAC & deletePostAC & SavePhotoSuccessAC>

const profileReducer = (state: ProfileReducerStateType = initialState, action: ProfileReducerAT): ProfileReducerStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.payload.text,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload.postId)
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        case SET_USERS_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile as UsersProfileType, photos: action.payload.photos}
            }


        default:
            return state
    }
}


export const addPostActionCreator = (text: string): ActionsType<AddPostAC> => ({type: ADD_POST, payload: {text}})
export const deletePostAC = (postId: number): ActionsType<deletePostAC> => ({type: DELETE_POST, payload: {postId}})

export const setUserProfile = (profile: UsersProfileType): ActionsType<SetUserProfileAC> => ({
    type: SET_USERS_PROFILE,
    payload: {profile}
})
export const setUserStatus = (status: string): ActionsType<SetUserStatusAC> => ({
    type: SET_USERS_STATUS,
    payload: {status}
})
export const savePhotoSuccess = (photos:  any): ActionsType<SavePhotoSuccessAC> => ({
    type: SAVE_PHOTO_SUCCESS,
    payload: {photos}
})


//thunk
export const getUserProfileTC = (userId: number): ThunkAction<void, AppRootStateType, {}, ActionsType<SetUserProfileAC>> => {
    return async (dispatch) => {
        const res = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(res.data))
    }
}

export const setUserStatusTC = (userId: number): ThunkAction<void, AppRootStateType, {}, ActionsType<SetUserStatusAC>> => {
    return async (dispatch) => {
       const res = await profileAPI.getStatus(userId)
                dispatch(setUserStatus(res.data))
    }
}
export const updateUserStatusTC = (status: string): ThunkAction<void, AppRootStateType, {}, ActionsType<SetUserStatusAC>> => {
    return async (dispatch) => {
       const res = await profileAPI.updateStatus(status)
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
    }
}

export const savePhotoTC = (file: any ): any => {
    return async (dispatch: any) => {
        const res = await profileAPI.savePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.data.photos))
        }
    }
}


export default profileReducer