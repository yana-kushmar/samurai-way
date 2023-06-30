 import React, {useEffect} from "react";
import  {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";

 import Dialogs from "./Dialogs";
 import {useDispatch, useSelector} from "react-redux";
 import store from "../../Redux/redux-store";
 import {Redirect} from "react-router-dom";
 import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
 import {compose} from "redux";


const DialogsContainer = () => {
    const dispatch = useDispatch()
    const dialogsPage = useSelector<any, any>(state => state.dialogsPage)
    const isAuth = useSelector<any, any>(store => store.auth.isAuth)



    return (
        <Dialogs
            dialogsPage={dialogsPage}
            updateNewMessageBody={(body: any) => dispatch(updateNewMessageBodyCreator(body))}
            sendMessage={() => dispatch(sendMessageCreator())}
            isAuth={isAuth}
        />
    )

}

compose(
    //connect(mapStateToProps, mapDispatchToProps)
    withAuthRedirect
)(Dialogs)

 export default DialogsContainer

 // const AuthRedirectComponent = withAuthRedirect(Dialogs)

 // let mapStateToPropsRedirect = (state) => {
 //  IsAuth : state.auth.isAuth
 //}

 // let mapStateToProps = (state) => {
 //  profile : state.profilePage.profile
 //}
 /// ТАКЖЕ ДЛЯ ДИАЛОГА

