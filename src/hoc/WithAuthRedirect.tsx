import {Navigate} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";


export const withAuthRedirect = (Component: any) => {
    return (props: any) => {
        const isAuth = useSelector<any>(store => store.auth.isAuth)
        if (!isAuth) return <Navigate to="/login"/>
        return <Component {...props}/>
    }
}