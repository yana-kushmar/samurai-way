import React from "react";

import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";



const MyPostsContainer = () => {
    const dispatch = useAppDispatch()
    const {posts} = useAppSelector( state => state.profilePage)

    return (
        <MyPosts
            posts={posts}
            addPost={(text: string) => dispatch(addPostActionCreator(text))}

        />
    );
};

export default MyPostsContainer;




