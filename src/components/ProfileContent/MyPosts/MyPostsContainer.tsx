import React from "react";

import {addPostActionCreator, updatedNewPostTextCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";



const MyPostsContainer = () => {
    const dispatch = useDispatch()
    const {posts, newPostText} = useSelector<any, any>( state => state.profilePage)

    return (
        <MyPosts
            posts={posts}
            newPostText={newPostText}
            updateNewPostText={(text: string) => dispatch(updatedNewPostTextCreator(text))}
            addPost={() => dispatch(addPostActionCreator())}

        />
    );
};

export default MyPostsContainer;




