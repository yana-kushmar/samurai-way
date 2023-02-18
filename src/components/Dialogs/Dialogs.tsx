import React from "react";
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

}

type DialogsPropsType = {
    state: StateType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )

}
export default Dialogs