import React from "react";

import {addPostActionCreator, updatedNewPostTextCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





let mapStateToProps = (state: any):any => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,

    }
}
let mapDispatchToProps = (dispatch: any):any => {
    return{
        updateNewPostText: () => {
            dispatch(addPostActionCreator())
        },
        addPost: (text: string) => {
            let action = updatedNewPostTextCreator(text)
            dispatch(action)
        },

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer