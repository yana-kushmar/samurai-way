import React, {useEffect} from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";


import {getUserProfileTC} from "../../../Redux/ProfileReducer";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {useIsLoggedIn} from "../../../hooks/useIsLoggedIn";


const ProfileContainer = (props: any) => {
    useIsLoggedIn()
    const dispatch = useAppDispatch()
    const profile = useAppSelector(store => store.profilePage.profile)
    const myId = useAppSelector(store => store.auth)
    const params = useParams()

    let userId = params.userId

    useEffect(() => {
        if (!userId && myId.id) {
            userId = myId.id.toString()
        }

        if (userId) {
            dispatch(getUserProfileTC(+userId))
        }
    }, [myId, userId])


    return (
        <div>
            <ProfileInfo {...props} profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default ProfileContainer



