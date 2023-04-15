 import React from "react";

import  {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";

 import Dialogs from "./Dialogs";
 import {connect} from "react-redux";


// type DialogsPropsType = {
//     store: typeof store
//
// }

let mapStateToProps = (state: any):any => {
    return{
        dialogsPage: state.dialogsPage

    }
}
 let mapDispatchToProps = (dispatch: any):any => {
     return {
         updateNewMessageBody: (body: any) => {
             dispatch(updateNewMessageBodyCreator(body))
         },
         sendMessage: () => {
             dispatch(sendMessageCreator())
         },

     }
 }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

 export default DialogsContainer
