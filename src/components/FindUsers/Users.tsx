import React from "react";
import s from "./Users.module.css"
import type {UserType} from "../../Redux/usersReducer";
import axios from "axios";
import userFoto from "./../../Assets/images/photo.png"


type UsersContainerPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void


}


const Users = (props: UsersContainerPropsType) => {

    let getUsers = () => {

        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    props.setUsers(res.data.items)
                })
        }
    }

    //componentDidAmount() {
    // axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //                 .then(res => {
    //                     props.setUsers(res.data.items)
//}





    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small !== null ? el.photos.small : userFoto} alt="avatar" className={s.usersPhoto}/>
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
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
            </div>)}
    </div>

}

export default Users