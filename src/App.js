import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import {BrowserRouter, Route} from "react-router-dom";



const App = () => {
    return (
        <div className="wrapper">
            <div><Header/></div>
            <div><Main/></div>
        </div>


    );
};



export default App;
