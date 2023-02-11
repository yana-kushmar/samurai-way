import React from "react";
import s from './ProfileContentCSS.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo";

const ProfileContent = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>

    )
}

export default ProfileContent