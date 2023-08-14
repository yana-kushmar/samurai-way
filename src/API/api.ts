import type {AxiosResponse} from "axios"
import axios from "axios";
import {LoginType} from "../components/Login/Login/Login";

export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
type UserType = {
    id: number,
    email: string,
    login: string
}

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

    follow(userId: number) {
        return instance.post(`follow/${userId}`,{})
    },
    unfollow(userId: number) {
        return  instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status})
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put('profile/photo/',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } )
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    login(data: LoginType){
        return instance.post<ResponseType<{userId: number}>, AxiosResponse<ResponseType<{userId: number}>>,LoginType>('/auth/login', data);

    },
    logOut(){
        return instance.delete<ResponseType<UserType>>('/auth/login');
    }
}


