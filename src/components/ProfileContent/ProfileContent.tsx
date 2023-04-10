import React from "react";


import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../Redux/redux-store";

type ProfileContentPropsType = {
    store: typeof store
}

const ProfileContent = (props: ProfileContentPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store} />
        </div>

    )
}

export default ProfileContent