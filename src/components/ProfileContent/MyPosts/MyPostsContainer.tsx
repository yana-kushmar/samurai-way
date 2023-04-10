import React from "react";

import {addPostActionCreator, updatedNewPostTextCreator} from "../../../Redux/ProfileReducer";
import store from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";




type MyPostPropsType = {

    // dispatch: (action: { type: string, newText?: any }) => void
    store: typeof store


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
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}

        />)
}

export default MyPostsContainer