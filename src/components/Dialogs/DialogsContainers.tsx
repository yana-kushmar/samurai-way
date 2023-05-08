 import React from "react";
import  {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";

 import Dialogs from "./Dialogs";
 import {useDispatch, useSelector} from "react-redux";


const DialogsContainer = () => {
    const dispatch = useDispatch()
    const dialogsPage = useSelector<any, any>(state => state.dialogsPage)

    return (
        <Dialogs
            dialogsPage={dialogsPage}
            updateNewMessageBody={(body: any) => dispatch(updateNewMessageBodyCreator(body))}
            sendMessage={() => dispatch(sendMessageCreator())}
        />
    )

}


 export default DialogsContainer
