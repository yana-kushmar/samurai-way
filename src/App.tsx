import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/navigationBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavigationBar/>
            {/*<ProfileContent />*/}
            <Dialogs/>
        </div>

    );
}


export default App;
