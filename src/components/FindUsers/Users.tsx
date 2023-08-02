import React, {memo} from 'react';

import {UserType} from "../../Redux/usersReducer";

import Paginator from "../../Common/paginator/Paginator";
import User from "./User";


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

const Users = memo(function (props: UsersContainerPropsType) {

    return <div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   portionSize={10}
        />

        <div>{
            props.users.map(el => <User
                    key={el.id}
                    user={el}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
            )}
        </div>

    </div>
})


export default Users;