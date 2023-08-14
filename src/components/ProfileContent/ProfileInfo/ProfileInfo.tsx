import React, {ChangeEvent, memo} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../Assets/images/photo.png"
import {useAppSelector} from "../../../Redux/redux-store";
import { savePhotoTC } from "../../../Redux/ProfileReducer";


export type ProfileInfo = {
    profile: {
        photos: {
            large: string
            small: string
        },
        userId: number
    }
}
const ProfileInfo = memo(function ({profile}: ProfileInfo) {
    const currentUser = useAppSelector(store => store.auth)
    console.log(profile)


    if (!profile) {
        return <Preloader/>
    }

    const onMainProfileSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) {
            console.log(e.target?.files)
    savePhotoTC(e.target.files[0])
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
            </div>
            <div>
                <ProfileStatus/>
            </div>
        </div>

    )
})

export default ProfileInfo