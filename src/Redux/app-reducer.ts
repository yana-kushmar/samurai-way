import {getAuthUserDataTC} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED"
type setInitializedAC = {
    type: string
}
type InitializedStateType = {
    initialized: boolean
}

let initialState = {
   initialized: false

}


const appReducer = (state: InitializedStateType = initialState, action: setInitializedAC) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }

}

//action
export const setInitialized = () => ({type: SET_INITIALIZED,} as const )



//thunk
export const initialisedAppTC = (): any => {
    return (dispatch: any) => {
        const promise = dispatch(getAuthUserDataTC())
        Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
    }
}



export default appReducer