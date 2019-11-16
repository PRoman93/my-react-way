import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"


const App = (props) => {
    //console.log(props.state)
    return (
        <div className="wrapper">
            <div><Header/></div>
            <div><Main messageData={props.state.messageData} postData={props.state.profileData}/></div>
        </div>


    );
};

export default App;
