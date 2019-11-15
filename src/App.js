import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"


const App = (props) => {
    return (
        <div className="wrapper">
            <div><Header/></div>
            <div><Main state={props.state.messageData} postData={props.state.profileData}/></div>
        </div>


    );
};

export default App;
