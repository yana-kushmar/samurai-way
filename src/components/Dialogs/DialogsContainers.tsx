 import React, {ChangeEvent} from "react";

import store, {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";
 import Dialogs from "./Dialogs";

type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}

type StateType = {
    messages: MessageType[]
    dialogs: DialogsType[]

}

type DialogsPropsType = {
    state?: StateType
    store:typeof store


}

const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    //////////////////////////
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>, body: any) => {
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