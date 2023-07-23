import React, {useEffect} from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar/navigationBar";
import {Route, Routes, Navigate } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainers";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/ProfileContent/ProfileContent/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {useAppDispatch, useAppSelector} from "./Redux/redux-store";
import {initialisedAppTC} from "./Redux/app-reducer";
import Preloader from "./Common/Preloader/Preloader";






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
                       element={<DialogsContainer/>}
                />
                <Route path='/profile/:userId?'
                       element={ <ProfileContainer />
                }/>

                <Route path='/users'
                       element={ <UsersContainer />
                       }/>
                <Route path='/news' element={<News />}/>
                <Route path='/music' element={ <Music />}/>
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
