

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


 export type UsersStateType = {
  users: UserType[]

}

export type UserType = {
    id: number,
    photoURL: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType

}

type LocationType = {
        city: string,
        country: string
}

export type UsersAT = {
    type: string,
    userId?: number,
    users?: UserType[]


    //типизация action если я не знаю какие ключи и какие у них значения
    //[x: string]: any
}

// let initialState = {
//     users: [
//         {id: 1, photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
//             followed: true, fullName: 'Yana', status: 'im girl', location: {city: "New York", country: "USA"}},
//         {id: 1, photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
//             followed: true, fullName: 'Igor', status: 'im boy', location: {city: "Brest", country: "Belarus"}},
//         {id: 1, photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
//             followed: true, fullName: 'Kuybi', status: 'im cat', location: {city: "Brest", country: "Belarus"}},
//         {id: 1, photoURL: "https://fikiwiki.com/uploads/posts/2022-02/1645033331_1-fikiwiki-com-p-krasivie-kartinki-na-smartfon-1.jpg",
//             followed: false, fullName: 'Max', status: 'im trans', location: {city: "Bali", country: "Indonesia"}},
//
//     ],
// }


 const usersReducer = (state: UsersStateType, action: UsersAT) => {

switch (action.type) {
    case FOLLOW:
        return  {
            ...state,
            users: state.users.map( el => {
               if (el.id === action.userId){
                   return {...el, followed: true}
               }
               return el
    } )
        }
    case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(el => {
                if(el.id === action.userId){
                    return{...el, followed: false}
                }
                return el
            })
        }
    case SET_USERS:
        return {
            ...state,
            users: [...state.users, action.users]
        }
    default:
        return state
}

}


    export const followAC = (userId: number) => ({type: FOLLOW, userId })
    export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId })
 export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users})


export default usersReducer