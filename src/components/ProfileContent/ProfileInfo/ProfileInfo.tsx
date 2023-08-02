import React, {memo} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../Assets/images/photo.png"

export type ProfileInfo = {
    profile: {
        photos: {
            large: string
            small: string
        }
    }
}
const ProfileInfo = memo(function ({profile}: ProfileInfo) {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
           {/*<div>*/}
           {/*    <img src="" alt=""задний фон картирки />*/}
           {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small || avatar} style={{width: '130px'}}/>
            </div>
            <div>
                <ProfileStatus />
            </div>
        </div>

    )
})

export default ProfileInfo