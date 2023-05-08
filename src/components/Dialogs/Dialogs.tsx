import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/Message";

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
    newMessageBody: string

}

type DialogsPropsType = {
    dialogsPage: StateType
    sendMessage: () => void
    updateNewMessageBody: (body: any) => void

}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)


    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)

    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='enter u message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Dialogs