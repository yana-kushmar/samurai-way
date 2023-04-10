 import React from "react";

import  {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";
 import store from "../../Redux/redux-store";
 import Dialogs from "./Dialogs";





type DialogsPropsType = {
    store: typeof store


}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }


    let onNewMessageChange = (body: any) => {
       props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )

}
export default DialogsContainer