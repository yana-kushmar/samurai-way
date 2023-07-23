import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../Assets/images/photo.png";
import { UserType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";





type UsersContainerPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (p: number) => void
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => (dispatch: any) => void/////
    totalUsersCount: number
    pageSize: number
    currentPage: number

}

const Users = (props: UsersContainerPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        className={props.currentPage === p ? s.selectedPage : ""}
                        onClick={(e) => props.onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
            <button onClick={() => props.getUsers(props.currentPage, props.pageSize)}>Get Users</button>
            {
                props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + el.id}>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="avatar"
                             className={s.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>

                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                      onClick={() => {props.unfollow(el.id)
                                      }}>Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === el.id)}
                                onClick={() => {props.follow(el.id)
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

    );
};

export default Users;