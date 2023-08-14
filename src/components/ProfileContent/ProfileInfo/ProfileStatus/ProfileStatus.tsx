import React, {ChangeEvent, memo, useEffect, useState} from 'react';

import {setUserStatusTC, updateUserStatusTC} from "../../../../Redux/ProfileReducer";
import {useAppDispatch, useAppSelector} from '../../../../Redux/redux-store';



const ProfileStatus = memo(function () {

    const dispatch = useAppDispatch()
    const  userId  = useAppSelector(store => store.profilePage.profile?.userId)
    const status = useAppSelector(store => store.profilePage.status)
    const currentUser = useAppSelector(store => store.auth)


    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(() =>{
        if (userId){
            dispatch(setUserStatusTC(userId))
        }
    }, [userId])

    const onDoubleClickStatus = () => {
        if (userId === currentUser.id){
            setIsEditMode(true)
        }

    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
       dispatch(updateUserStatusTC(e.currentTarget.value))
    }
    const onBlurHandler = () => {
        if (status) {
            setIsEditMode(false)
        }
    }

    return (
        <>
            <div>
                {!isEditMode &&
                    <span onDoubleClick={onDoubleClickStatus}>{status || "No status"}</span>
                }
            </div>
            <div>{
                isEditMode &&
                <input
                    value={status}
                    onChange={changeStatusHandler}
                    onBlur={onBlurHandler}
                />
            }
            </div>
        </>
    );
})


export default ProfileStatus;