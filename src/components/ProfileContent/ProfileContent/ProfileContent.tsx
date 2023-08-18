import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";




const ProfileContent = (props: any) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>

    )
}

export default ProfileContent