import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/navigationBar";
import ProfileContent from "./components/ProfileContent/ProfileContent";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavigationBar />
            <ProfileContent />

        </div>

    );
}


export default App;
