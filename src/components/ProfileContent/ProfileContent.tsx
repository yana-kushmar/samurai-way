import React from "react";
import s from './ProfileContentCSS.module.css'

const ProfileContent = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://newsely.com/wp-content/uploads/2020/09/D31.png" alt="foto" />
            </div>
            <div>
                ava + description
            </div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post1
                </div>
                <div className='item'>
                    post2
                </div>
            </div>
        </div>
)
}

export default ProfileContent