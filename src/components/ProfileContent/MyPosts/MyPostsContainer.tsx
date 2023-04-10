import React from "react";

import {addPostActionCreator, updatedNewPostTextCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";


type PostType = {
    id: number
    message: string
    likesCount: number
}

type MyPostPropsType = {
    posts: PostType[]
    addPost: () => string
    dispatch: (action: { type: string, newText?: any }) => void
    store: any


}


const MyPostsContainer = (props: MyPostPropsType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {

        let action = updatedNewPostTextCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage}
            newPostText={state.profilePage.newPostText}

        />)
}

export default MyPostsContainer