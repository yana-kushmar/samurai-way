

const ADD_POST = "ADD-POST"
const UPDATED_NEW_POST_TEXT = "UPDATED-NEW-POST-TEXT"


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
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is u name"},
                {id: 3, message: "What is u name"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"},
            ],
            dialogs: [
                {id: 1, name: "Yana"},
                {id: 2, name: "Igor"},
                {id: 3, name: "Kubiy"},
                {id: 4, name: "Sony"},
                {id: 5, name: "Shpak"},
                {id: 6, name: "Timur"},
            ],
        },


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

    dispatch(action: { type: string, newText?: any  }) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATED_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatedNewPostTextCreator = (text: string) =>
    ({type: UPDATED_NEW_POST_TEXT, newText: text})


export default store