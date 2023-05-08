import {connect, useDispatch, useSelector} from "react-redux";

import {
    follow,
    setCurrentPage, setIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow, UsersStateType,

    UserType
} from "../../Redux/usersReducer";
import {StateType} from "../../Redux/redux-store";


import React, {useEffect} from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";


const UsersContainer = () => {
    const dispatch = useDispatch()
    const {users, pageSize, totalUsersCount, currentPage, isFetching} = useSelector<StateType, UsersStateType>(state => state.usersPage)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        dispatch(setIsFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(res.data.items))
                dispatch(setUsersTotalCount(res.data.totalCount))
            })
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setIsFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(res => {
                dispatch(setUsers(res.data.items))
                dispatch(setIsFetching(false))
            })

    }

    return <>
        {isFetching ? <Preloader/> : null}
        <Users
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            getUsers={getUsers}
            users={users}
            follow={(userId: number) => dispatch(follow(userId))}
            unfollow={(userId: number) => dispatch(unfollow(userId))}

        />
    </>

}


export default UsersContainer



