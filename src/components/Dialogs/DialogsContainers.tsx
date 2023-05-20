 import React, {useEffect} from "react";
import  {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";

 import Dialogs from "./Dialogs";
 import {useDispatch, useSelector} from "react-redux";
 import store from "../../Redux/redux-store";


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


 export default DialogsContainer
