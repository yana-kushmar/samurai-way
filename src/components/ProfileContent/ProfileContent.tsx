import React from "react";


import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const ProfileContent = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    )
}

export default ProfileContent