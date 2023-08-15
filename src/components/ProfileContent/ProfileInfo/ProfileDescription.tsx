import React from 'react';

export type ProfileDescriptionType = {
    profile: {
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
}
type Key = keyof ProfileDescriptionType['profile']['contacts']
type ContactsType = {
    contactTitle: string
    contactValue: string
}

const ProfileDescription = ({profile}: ProfileDescriptionType) => {
    return (
        <div>
            <div>
                <b>Full name</b> : {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b> : {profile.lookingForAJobDescription}
                </div>}
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key) =>{
                return <Contacts contactTitle={key} contactValue={profile.contacts[key as Key]}/>
            })}
            </div>
        </div>

    );
};




export const Contacts = (props: ContactsType) => {
    return(
        <div>
            <b> {props.contactTitle}</b>: {props.contactValue}
        </div>
    )

}

export default ProfileDescription;