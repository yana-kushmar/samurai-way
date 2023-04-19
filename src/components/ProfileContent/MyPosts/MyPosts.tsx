import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type PostType = {
    id: number
    message: string
    likesCount: number


}

type MyPostPropsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void


}


const MyPosts = (props: MyPostPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<any>()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts