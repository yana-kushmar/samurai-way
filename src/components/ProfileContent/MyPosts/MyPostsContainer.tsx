import React, {useMemo} from "react";

import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";



const MyPostsContainer = () => {
    const dispatch = useAppDispatch()
    const profileState = useAppSelector( state => state.profilePage)
    const {posts} = profileState

    const sortedPost = useMemo(() => {
        return posts.sort((a, b) => {
            return b.id - a.id
        })
    }, [posts])

    return (
        <MyPosts
            posts={sortedPost}
            addPost={(text: string) => dispatch(addPostActionCreator(text))}

        />
    );
};

export default MyPostsContainer;




