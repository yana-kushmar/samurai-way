import React from "react";
import s from './ProfileContentCSS.module.css'
import MyPosts from "./MyPosts/MyPosts";

const ProfileContent = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://newsely.com/wp-content/uploads/2020/09/D31.png" alt="foto"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>

    )
}

export default ProfileContent