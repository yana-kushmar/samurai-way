import React, {Suspense, useEffect} from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar/navigationBar";
import {Route, Routes, Navigate } from "react-router-dom";
import News from "./components/News/News";

import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/FindUsers/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {useAppDispatch, useAppSelector} from "./Redux/redux-store";
import {initialisedAppTC} from "./Redux/app-reducer";
import Preloader from "./Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainers"))
const ProfileContainer = React.lazy(() => import("./components/ProfileContent/ProfileContent/ProfileContainer"))


const App = () => {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(store => store.app.initialized)

    useEffect(() => {
        dispatch(initialisedAppTC())
    }, [])

    if (!initialized){
        return <Preloader/>
    }
    return (
        <div className='app-wrapper'>

            <HeaderContainer/>
            <NavigationBar/>
            <div className='app-wrapper-content'>

                <Routes>
                <Route path='/dialogs'
                       element={<Suspense fallback="Loading...">
                           <DialogsContainer/>
                       </Suspense>}
                />
                <Route path='/profile/:userId?'
                       element={
                           <Suspense fallback="Loading...">
                               <ProfileContainer />
                           </Suspense>
                }/>

                <Route path='/users'
                       element={ <UsersContainer />
                       }/>
                <Route path='/news' element={<News />}/>

                <Route path='/settings' element={<Settings />}/>
                <Route path='/login'
                       element={ <LoginContainer />}
                />
                    <Route path={'/404'} element={<h1
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        404: PAGE NOT FOUND</h1>}/>
                    <Route path={'*'} element={<Navigate to={'404'}/>}/>
                </Routes>
            </div>
        </div>

    );
}


export default App;
