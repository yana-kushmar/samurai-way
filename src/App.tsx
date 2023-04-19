import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/navigationBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainers";
import store from './Redux/redux-store';
import UsersContainer from "./components/FindUsers/UsersContainer";




const App = () => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavigationBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/profile'
                       render={() => <ProfileContent />
                }/>

                <Route path='/users'
                       render={() => <UsersContainer />
                       }/>
                <Route path='/news' render={() => <News />}/>
                <Route path='/music' render={() => <Music />}/>
                <Route path='/settings' render={() => <Settings />}/>
            </div>
        </div>
        </BrowserRouter>

    );
}


export default App;
