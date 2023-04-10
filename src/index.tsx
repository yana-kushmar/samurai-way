import React from 'react';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";



 let rerenderEntireTree = (state: any) => {
 ReactDOM.render(
     <BrowserRouter>
      <App state={state}
           dispatch={store.dispatch.bind(store)}
           store={store}
          />
     </BrowserRouter>,
     document.getElementById('root')
 );
}




 rerenderEntireTree(store.getState());
 store.subscribe(() => {
     let state = store.getState()
     rerenderEntireTree(state)
 })