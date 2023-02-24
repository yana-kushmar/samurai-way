import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/navigationBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props: any) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavigationBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs  state={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <ProfileContent
                           state={props.state.profilePage}
                           addPost={props.addPost}/>}/>
                <Route path='/news' render={() => <News />}/>
                <Route path='/music' render={() => <Music />}/>
                <Route path='/settings' render={() => <Settings />}/>
            </div>
        </div>
        </BrowserRouter>

    );
}


export default App;
