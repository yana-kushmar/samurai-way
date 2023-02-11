import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {
    return (
        <div className={s.postBlock}>
           <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are u?' likesCount={15}/>
                <Post message="It's my first post" likesCount={20}/>

            </div>
        </div>
    )
}

export default MyPosts