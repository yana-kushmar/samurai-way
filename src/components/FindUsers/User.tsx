import React, {memo} from 'react';
import s from "./Users.module.css";
import userPhoto from "../../Assets/images/photo.png";
import {UserType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]

}

const User = memo(function (props: UserPropsType) {


    return (
        <div>

                <span>
                    <div>
                        <NavLink to={"/profile/" + props.user.id}>
                        <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto} alt="avatar"
                             className={s.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>

                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unfollow(props.user.id)
                                      }}>Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === props.user.id)}
                                onClick={() => {
                                    props.follow(props.user.id)
                                }}>Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
        </div>
    )})

export default User;