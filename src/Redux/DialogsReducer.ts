import {ActionsType} from "./types";

const SEND_MESSAGE = "SEND_MESSAGE"

type SendMessageAT = {
    text: string
}
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

type DialogsReducerAT = ActionsType<SendMessageAT>


const dialogsReducer = (state = initialState, action: DialogsReducerAT) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.payload.text
            return {...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }

}

export const sendMessageAC = (text: string): ActionsType<SendMessageAT> => ({type: SEND_MESSAGE, payload: {text}})


export default dialogsReducer