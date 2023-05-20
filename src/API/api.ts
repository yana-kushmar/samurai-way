import axios from "axios";
import {setAuthUserData} from "../Redux/authReducer";


export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b5d3cf05-af76-4fa9-a21c-3372c69b1b8c"
    }
})

export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)


    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(res => res.data)

    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`,{})
    },
    unfollow(userId: number) {
        return  instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId: number) {
       return instance.get('profile/' + userId)
    }


}


// export const getUsers2 = (currentPage: number, pageSize: number) => {
//     return  instance.get( `follow?page=${currentPage}&count=${pageSize}`)
//         .then(res => res.data)
// }
