import React from "react";
import state from "./Store";

const ADD_POST = "ADD-POST"
const UPDATED_NEW_POST_TEXT = "UPDATED-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "huy", likesCount: 20},
    ],
    newPostText: 'It-kamasutra.com'
}


 const profileReducer = (state = initialState, action: any) => {
switch (action.type) {
    case ADD_POST:
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ""
        return state
    case UPDATED_NEW_POST_TEXT:
        state.newPostText = action.newText
        return state
    default:
        return state
}

}


    export const addPostActionCreator = () => ({type: ADD_POST})

    export const updatedNewPostTextCreator = (text: string) =>
        ({type: UPDATED_NEW_POST_TEXT, newText: text})

//     if (action.type === ADD_POST) {
//         let newPost = {
//             id: 5,
//             message: state.newPostText,
//             likesCount: 0
//         }
//         state.posts.push(newPost)
//         state.newPostText = ""
//
//     } else if (action.type === UPDATED_NEW_POST_TEXT) {
//         state.newPostText = action.newText
//
//
// }

export default profileReducer