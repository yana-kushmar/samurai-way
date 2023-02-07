import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post  message='Hi, how are u?' likesCount={15}/>
                <Post message="It's my first post" likesCount={20}/>

            </div>
        </div>
)
}

export default MyPosts