


const UPDATED_NEW_MESSAGE_BODY = "UPDATED_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"



let initialState = {
    dialogs: [
        {id: 1, name: "Yana"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Kubiy"},
        {id: 4, name: "Sony"},
        {id: 5, name: "Shpak"},
        {id: 6, name: "Timur"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is u name"},
        {id: 3, message: "What is u name"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ],
    newMessageBody: ""
}

 const dialogsReducer = (state = initialState, action: any) => {
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




export default dialogsReducer