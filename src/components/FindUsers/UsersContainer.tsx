import { useDispatch, useSelector} from "react-redux";

import {
    follow,
    setCurrentPage, setFollowingInProgress, setIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow, UsersStateType,
} from "../../Redux/usersReducer";
import {StateType} from "../../Redux/redux-store";

import React, {useEffect} from "react";

import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import { UsersAPI} from "../../API/api";

///проблемы с получением данных через axios

const UsersContainer = () => {
    const dispatch = useDispatch()
    const {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress} = useSelector<StateType, UsersStateType>(state => state.usersPage)

    useEffect(() => {
        getUsers()
    }, [])


    const getUsers = () => {
        dispatch(setIsFetching(true))
    UsersAPI.getUsers(currentPage, pageSize)
                .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            })
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setIsFetching(true))

        UsersAPI.getUsers(currentPage, pageNumber)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setIsFetching(false))
            })

    }

    return <>
        {isFetching ? <Preloader/> : null}
        <Users
            setFollowingInProgress={(isFetching, userId) => dispatch(setFollowingInProgress(isFetching, userId))}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            followingInProgress={followingInProgress}
            getUsers={getUsers}
            users={users}
            follow={(userId: number) => dispatch(follow(userId))}
            unfollow={(userId: number) => dispatch(unfollow(userId))}

        />
    </>

}

/////setFollowingInProgress
export default UsersContainer



