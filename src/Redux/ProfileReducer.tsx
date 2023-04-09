import React from "react";
import state from "./State";

const ADD_POST = "ADD-POST"
const UPDATED_NEW_POST_TEXT = "UPDATED-NEW-POST-TEXT"


 const profileReducer = ({state, action}: any) => {
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