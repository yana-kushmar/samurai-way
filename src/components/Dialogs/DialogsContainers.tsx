 import React from "react";
import {sendMessageAC} from "../../Redux/DialogsReducer";

 import Dialogs from "./Dialogs";
 import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
 import {useIsLoggedIn} from "../../hooks/useIsLoggedIn";


const DialogsContainer = () => {
    useIsLoggedIn()
    const dispatch = useAppDispatch()
    const dialogsPage = useAppSelector(state => state.dialogsPage)
    const isAuth = useAppSelector(store => store.auth.isAuth)



    return (
        <Dialogs
            dialogsPage={dialogsPage}
            sendMessage={(text: string) => dispatch(sendMessageAC(text))}
            isAuth={isAuth}
        />
    )

}

 export default DialogsContainer


