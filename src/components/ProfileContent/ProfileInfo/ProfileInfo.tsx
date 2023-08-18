import React, {ChangeEvent, memo, useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../Assets/images/photo.png"
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {savePhotoTC} from "../../../Redux/ProfileReducer";
import ProfileDescription, {Contacts, ProfileDescriptionType} from "./ProfileDescription";
import ProfileDescriptionForm from "./ProfileDescriptionForm/ProfileDescriptionForm";


export type ProfileInfo = {
    profile: {
        userId: number
        fullName: string,
        aboutMe: string,
        lookingForAJob: boolean,
        lookingForAJobDescription: string,
        contacts: {
            facebook: string,
            github: string,
            instagram: string,
            mainLink: string,
            twitter: string,
            vk: string,
            website: string,
            youtube: string,
        },
        photos: {
            large: string
            small: string
        },

    }
}


const ProfileInfo = memo(function ({profile}: ProfileInfo) {
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(store => store.auth)

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainProfileSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) {

            dispatch(savePhotoTC(e.target.files[0]))

        }
    }


    return (
        <div>
            {/*<div>*/}
            {/*    <img src="" alt=""задний фон картирки />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small || avatar} style={{width: '130px'}}/>
                {currentUser.id === profile.userId && <input type={"file"} onChange={onMainProfileSelected}/>}
                <div>
                    <ProfileStatus/>
                </div>
                {editMode
                    ? <ProfileDescriptionForm profile={profile} exitEditMode={() => {setEditMode(false)}}/>
                    : <ProfileDescription profile={profile} goToEditMode={() => {setEditMode(true)}}/>}

            </div>

        </div>

    )
})





export default ProfileInfo