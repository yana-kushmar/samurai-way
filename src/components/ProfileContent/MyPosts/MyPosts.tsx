import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {message} from "antd";


type PostType = {
    id: number
    message: string
    likesCount: number

}

type MyPostPropsType = {
    posts: PostType[]
}
const MyPosts = (props: MyPostPropsType) => {


    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts