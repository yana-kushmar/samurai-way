import React from 'react';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



 // let rerenderEntireTree = (state: any) => {
 ReactDOM.render(
     <BrowserRouter>
         <Provider store={store} >
      <App
           // dispatch={store.dispatch.bind(store)}
           store={store}
          />
         </Provider>
     </BrowserRouter>,
     document.getElementById('root')
 );
// }




 // rerenderEntireTree(store.getState());
