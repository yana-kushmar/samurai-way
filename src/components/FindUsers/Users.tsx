import React from "react";
import s from "./Users.module.css"
import type {UserType} from "../../Redux/usersReducer";


type UsersContainerPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void


}


const UsersContainer = (props: UsersContainerPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
                followed: true,
                fullName: 'Yana',
                status: 'im girl',
                location: {city: "New York", country: "USA"}
            },
            {
                id: 2,
                photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
                followed: true,
                fullName: 'Igor',
                status: 'im boy',
                location: {city: "Brest", country: "Belarus"}
            },
            {
                id: 3,
                photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
                followed: true,
                fullName: 'Kuybi',
                status: 'im cat',
                location: {city: "Brest", country: "Belarus"}
            },
            {
                id: 4,
                photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
                followed: false,
                fullName: 'Max',
                status: 'im trans',
                location: {city: "Bali", country: "Indonesia"}
            },

        ])
    }


    return <div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photoURL} alt="avatar" className={s.usersPhoto}/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </span>
                </span>
            </div>)}
    </div>

}

export default UsersContainer