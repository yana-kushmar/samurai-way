import {connect} from "react-redux";
import Users from "./Users";

import {followAC, setUsersAC, unFollowAC, UsersAT, UserType} from "../../Redux/usersReducer";
import {StateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType) => {
    return {
       users: state.usersPage.users
    }

}

const mapDispatchToProps = (dispatch: Dispatch<UsersAT>) => {
    return {
        follow: (userId: number) => {
           dispatch(followAC(userId))
        },

        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)