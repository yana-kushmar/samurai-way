import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
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
    return(
        <div className={s.message}>{props.message}</div>
        )

}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Yana" id="1"/>
                <DialogItem name="Igor" id="2"/>
                <DialogItem name="Kubiy" id="3"/>
                <DialogItem name="Sony" id="4"/>
                <DialogItem name="Shpak" id="5"/>
                <DialogItem name="Timur" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is u name"/>
                <Message message="What is u name"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>


            </div>
        </div>
    )

}
export default Dialogs