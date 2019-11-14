import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from "./state/state"
export * from "react-router-dom";


let dialogs= [
    {id: 1, name: 'Roman'},
    {id: 2, name: 'Ruslan'},
    {id: 3, name: 'Yeugene'},
    {id: 4, name: 'Serij'},
    {id: 5, name: 'Petr'},
]
    let message = [
    {id: 1, message: 'Hi,how are you?', likesCount: 12},
    {id: 2, message: 'Hi,whats up?', likesCount: 15},
    {id: 3, message: 'Hello!?', likesCount: 18},
    {id: 4, message: 'Duuuuuude!', likesCount: 17},
    {id: 5, message: 'Yo!', likesCount: 19},
]

    let postData = [
    {id: 1, message: "Hi, how are you", likesCount: "10"},
    {id: 2, message: "Its my first post", likesCount: "8"},
    {id: 2, message: "Its my second post", likesCount: "7"},
    {id: 2, message: "Its my third post", likesCount: "16"},
    {id: 3, message: "Yo", likesCount: "14"}
]

    ReactDOM.render(<App dialogs={dialogs} message={message} postData={postData}/>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
