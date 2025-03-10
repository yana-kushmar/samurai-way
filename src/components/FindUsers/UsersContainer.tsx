import {
    acceptUnfollow,
    followSuccess,
    getUsersTC,
    setCurrentPage,
    setFollowingInProgress,
    setIsFetching,
    setUsers,
} from "../../Redux/usersReducer";

import React, {useEffect} from "react";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";

import {compose} from "redux";
import {UsersAPI} from "../../API/api";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {useIsLoggedIn} from "../../hooks/useIsLoggedIn";


const UsersContainer = () => {
    useIsLoggedIn()
    const dispatch = useAppDispatch()
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress
    } = useAppSelector(state => state.usersPage)

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage, pageSize])


    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))

        dispatch(setCurrentPage(pageNumber))
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
            getUsers={getUsersTC}
            users={users}
            follow={(userId: number) => dispatch(followSuccess(userId))}
            unfollow={(userId: number) => dispatch(acceptUnfollow(userId))}

        />
    </>

}

export default compose()(UsersContainer)







