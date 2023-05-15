import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer, {UsersStateType} from "./usersReducer";
import authReducer from "./authReducer";


export type StateType = {
    usersPage:  UsersStateType


}


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

 let store = createStore(reducers)




export default store