import React, {createRef} from "react";
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
    addPost: (t: string) => string
}
const MyPosts = (props: MyPostPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<any>()
    let addPost = () => {
        let  text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""

    }
    return (
        <div className={s.postBlock}>
           <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts