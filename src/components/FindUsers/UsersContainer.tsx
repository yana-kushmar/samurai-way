import { useDispatch, useSelector} from "react-redux";

import {acceptUnfollow, followSuccess, getUsers, setFollowingInProgress, UsersStateType,} from "../../Redux/usersReducer";
import {StateType} from "../../Redux/redux-store";

import React, {useEffect} from "react";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";



const UsersContainer = () => {
    const dispatch = useDispatch()
    const {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress} = useSelector<StateType, UsersStateType>(state => state.usersPage)

    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, [currentPage, pageSize]) // передала как зависимость


    // const getUsers = (currentPage: number, pageSize: number) => {
    // getUsers()
    // }

    const onPageChanged = (pageNumber: number) => {
        getUsers(pageNumber, pageSize)

        // dispatch(setCurrentPage(pageNumber))
        // dispatch(setIsFetching(true))
        //
        // UsersAPI.getUsers(currentPage, pageNumber)
        //     .then(data => {
        //         dispatch(setUsers(data.items))
        //         dispatch(setIsFetching(false))
        //     })

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
            follow={(userId: number) => dispatch(followSuccess(userId))}
            unfollow={(userId: number) => dispatch(acceptUnfollow(userId))}

        />
    </>

}

/////setFollowingInProgress
export default UsersContainer



