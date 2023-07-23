import {useAppSelector} from "../Redux/redux-store";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


export const useIsLoggedIn = () => {
    const isAuth = useAppSelector(store => store.auth.isAuth)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])

};

