import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";

type PostType = {
    id: number
    message: string
    likesCount: number
}
type MyPostPropsType = {
    posts: PostType[]
    addPost: (text: string) => void

}


const MyPosts = (props: MyPostPropsType) => {

    let postsElements = props.posts.map((p) =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>

                <Formik
                    initialValues={{newPostText: ""}}
                    validate={values => {
                        const errors: Record<string, string> = {}
                        if (!values.newPostText) {
                            errors.newPostText = 'Required'
                        }
                        return errors
                    }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        props.addPost(values.newPostText)
                        setSubmitting(false)
                        resetForm()

                    }}>
                    {({isSubmitting, errors}) => {
                        console.log(errors)
                        return (
                            <Form>
                                <Field type="newPostText" name="newPostText" className={errors.newPostText && s.error}/>
                                <ErrorMessage name="newPostText" component="div"/>
                                <button type="submit" disabled={isSubmitting}>
                                    Add Post
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
                <div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts