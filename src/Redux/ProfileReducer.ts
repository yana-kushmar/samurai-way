const ADD_POST = "ADD-POST"
const UPDATED_NEW_POST_TEXT = "UPDATED-NEW-POST-TEXT"
const SET_USERS_PROFILE = "SET_USERS_PROFILE"


type usersProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
}
type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type postType = {
    id: number
    message: string
    likesCount: number
}
type initialStateType = {
    posts: postType[]
    newPostText: string
    profile: usersProfileType
}


let initialState  = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "huy", likesCount: 20},
    ],
    newPostText: 'It-kamasutra.com',
    profile: null
}




 const profileReducer = (state = initialState, action: any) => {
switch (action.type) {
    case ADD_POST:
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }

        return  {...state,
            posts: [...state.posts, newPost],
            newPostText: ""}



    case UPDATED_NEW_POST_TEXT:
        return {...state,
            newPostText: action.newText
        }
    case SET_USERS_PROFILE: {
        return {
            ...state,
            profile: action.profile

        }
    }

    default:
        return state
}
}



export const addPostActionCreator = () => ({type: ADD_POST})
export const updatedNewPostTextCreator = (text: string) => ({type: UPDATED_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: usersProfileType) => ({type: SET_USERS_PROFILE, profile})


export default profileReducer