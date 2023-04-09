import React, {createRef, MouseEventHandler, useState} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updatedNewPostTextCreator} from "../../../Redux/ProfileReducer";


type PostType = {
    id: number
    message: string
    likesCount: number


}

type MyPostPropsType = {
    posts: PostType[]
    //addPost: () => string
    newPostText: string
    //updateNewPostText: (text: string) => void
    dispatch: (action: { type: string, newText?: any }) => void

}


const MyPosts = (props: MyPostPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<any>()

    let addPost = () => {
        //props.addPost()
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        //props.updatedNewPostText(text)
        let action = updatedNewPostTextCreator(text)
        props.dispatch(action)
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