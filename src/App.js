import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"


// let dialogsData = [
//     {id: 1, name: 'Roman'},
//     {id: 2, name: 'Ruslan'},
//     {id: 3, name: 'Yeugene'},
//     {id: 4, name: 'Serij'},
//     {id: 5, name: 'Petr'},
// ];
// let postData = [
//     {id: 1, message: 'Hi,how are you?', likesCount: 12},
//     {id: 2, message: 'Hi,whats up?', likesCount: 15},
//     {id: 3, message: 'Hello!?', likesCount: 18},
//     {id: 4, message: 'Duuuuuude!', likesCount: 17},
//     {id: 5, message: 'Yo!', likesCount: 19},
// ]



const App = (props) => {
    return (
        <div className="wrapper">
            <div><Header/></div>
            <div><Main dialogs={props.state.dialogs} message={props.state.message}/></div>
        </div>


    );
};



export default App;
