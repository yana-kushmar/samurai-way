import React, {useEffect} from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

import {connect, useDispatch, useSelector} from "react-redux";
import {getUserProfile, setUserProfile} from "../../../Redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import Dialogs from "../../Dialogs/Dialogs";







const ProfileContainer = (props: any) => {
    const dispatch = useDispatch()
    const profile = useSelector<any, any>(store => store.profilePage.profile)
    // const isAuth = useSelector<any, any>(store => store.auth.isAuth)

    let userId = props.match.params.userId
    if (!userId) {
        userId = 1
    }
    useEffect(() => {
       getUserProfile(userId)
    }, [])


    return (

        <div>
            <ProfileInfo {...props} profile={profile}/>
            <MyPostsContainer/>

        </div>
    );
};



// export default
compose(
    //connect(mapStateToProps, mapDispatchToProps)
    withRouter,
    withAuthRedirect
)(ProfileContainer)

export  default ProfileContainer //change

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let mapStateToPropsRedirect = (state) => {
//  IsAuth : state.auth.isAuth
//}

// let mapStateToProps = (state) => {
//  profile : state.profilePage.profile
//}

// const urlDataContainerComponent = withRouter(ProfileContainer)
//
// export default connect(mapStateToProps, {setUserProfile})(urlDataContainerComponent);