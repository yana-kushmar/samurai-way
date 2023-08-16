import React from 'react';
import {useAppSelector} from "../../../Redux/redux-store";

export type ProfileDescriptionType = {
    profile: {
        userId: number,
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

    }
    goToEditMode: () => void
}
type Key = keyof ProfileDescriptionType['profile']['contacts']
type ContactsType = {
    contactTitle: string
    contactValue: string
}

const ProfileDescription = (props: ProfileDescriptionType) => {
    const currentUser = useAppSelector(store => store.auth)

    return (
        <div>
            {currentUser.id === props.profile.userId &&
                <div>
                    <button onClick={props.goToEditMode}>edit</button>
                </div>}
            <div>
                <b>Full name</b> : {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b> : {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b> : {props.profile.lookingForAJobDescription}
                </div>}
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map((key) => {
                return <Contacts contactTitle={key} contactValue={props.profile.contacts[key as Key]}/>
            })}
            </div>
        </div>

    );
};


export const Contacts = (props: ContactsType) => {
    return (
        <div>
            <b> {props.contactTitle}</b>: {props.contactValue}
        </div>
    )

}

export default ProfileDescription;