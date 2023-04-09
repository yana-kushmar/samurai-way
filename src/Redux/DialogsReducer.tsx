import React from "react";


const UPDATED_NEW_MESSAGE_BODY = "UPDATED_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

 const dialogsReducer = ({state, action}: any) => {
switch (action.type) {
    case UPDATED_NEW_MESSAGE_BODY && action.body :
        state.newMessageBody = action.body
        return state
    case SEND_MESSAGE:
        let body = state.newMessageBody
        state.newMessageBody = ""
        state.messages.push({id: 6, message: body})
        return state
    default: return state


}

 }

    export const sendMessageCreator = () => ({type: SEND_MESSAGE})

    export const updateNewMessageBodyCreator = (body: string) =>
        ({type: UPDATED_NEW_MESSAGE_BODY, body: body})


//     if (action.type === UPDATED_NEW_MESSAGE_BODY && action.body) {
//         state.newMessageBody = action.body
//
//     } else if (action.type === SEND_MESSAGE) {
//         let body = state.newMessageBody
//         state.newMessageBody = ""
//         state.messages.push({id: 6, message: body})
//
//     }
// }



export default dialogsReducer