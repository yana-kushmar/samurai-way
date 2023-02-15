import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )

}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

}

const Dialogs = (props: any) => {
    let dialogsData = [
        {id: 1, name: "Yana"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Kubiy"},
        {id: 4, name: "Sony"},
        {id: 5, name: "Shpak"},
        {id: 6, name: "Timur"},
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is u name"},
        {id: 3, message: "What is u name"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ]

    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
]
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name="Igor" id="2"/>*/}
                {/*<DialogItem name="Kubiy" id="3"/>*/}
                {/*<DialogItem name="Sony" id="4"/>*/}
                {/*<DialogItem name="Shpak" id="5"/>*/}
                {/*<DialogItem name="Timur" id="6"/>*/}
            </div>
            <div className={s.messages}>
                {/*<Message message={messagesData[0].message} />*/}
                {/*<Message message={messagesData[1].message}/>*/}
                {/*<Message message="What is u name"/>*/}
                {/*<Message message="Yo"/>*/}
                {/*<Message message="Yo"/>*/}
                {/*<Message message="Yo"/>*/}


            </div>
        </div>
    )

}
export default Dialogs