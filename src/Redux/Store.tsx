import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 20},
                {id: 3, message: "huy", likesCount: 20},
            ],
            newPostText: 'It-kamasutra.com'

        },
        dialogsPage: {
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
        },
        sidebar: {},


    },
    _callSubscriber(state: any) {
        console.log("sdfgh")
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: { type: string, newText?: any, body?: string }) {

        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer( this._state.sidebar, action)
        this._callSubscriber(this._state)


    }
}


export default store