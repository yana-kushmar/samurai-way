import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/dialogItem";
import Message from "./Message/Message";

import {ErrorMessage, Field, Form, Formik} from "formik";


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
    sendMessage: (text: string) => void
    isAuth: boolean

}

const Dialogs = (props: DialogsPropsType) => {

    const state = props.dialogsPage

    const dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)


    const messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>)


    // if (!props.isAuth) return <Navigate to={"/login"} />


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

                <Formik
                    initialValues={{newMessageBody: ''}}

                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        props.sendMessage(values.newMessageBody)
                        setSubmitting(false)
                        resetForm()
                    }
                    }>
                    {({isSubmitting}) => (
                        <Form>
                            <Field type="newMessageBody" name="newMessageBody"/>
                            <ErrorMessage name="newPostText" component="div"/>
                            <button type="submit" disabled={isSubmitting}>
                                Send
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )

}
export default Dialogs