import React, {memo} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../Assets/images/photo.png"


const ProfileInfo = memo(function (props: any) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
           {/*<div>*/}
           {/*    <img src="" alt=""задний фон картирки />*/}
           {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small || avatar} style={{width: '130px'}}/>
            </div>
            <div>
                <ProfileStatus />
            </div>
        </div>

    )
})

export default ProfileInfo