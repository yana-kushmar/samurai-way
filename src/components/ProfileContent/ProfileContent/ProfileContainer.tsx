import React, {useEffect} from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import axios from "axios";
import {connect, useDispatch, useSelector} from "react-redux";
import {setUserProfile} from "../../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";


// type ProfileContainerType = {
//     pofile:
//     setUserProfile: () => void
// }


const ProfileContainer = (props: any) => {
    // const dispatch = useDispatch()
    // const profileState = useSelector<any, any>(state => state.profilePage.profile)

    let userId = props.match.params.userId
    if (!userId) {
        userId = 1
    }
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(res => {
                props.setUserProfile(res.data)
            })
    }, [])


    return (
        <div>
            <ProfileInfo {...props} profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    );
};

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile

})

const urlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(urlDataContainerComponent);