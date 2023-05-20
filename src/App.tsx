import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar/navigationBar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainers";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/ProfileContent/ProfileContent/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";




const App = () => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavigationBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />
                }/>

                <Route path='/users'
                       render={() => <UsersContainer />
                       }/>
                <Route path='/news' render={() => <News />}/>
                <Route path='/music' render={() => <Music />}/>
                <Route path='/settings' render={() => <Settings />}/>
                <Route path='/login'
                       render={() => <LoginContainer />}
                />
            </div>
        </div>
        </BrowserRouter>

    );
}


export default App;
