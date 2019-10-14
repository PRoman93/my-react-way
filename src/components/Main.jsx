import React from "react";
import s from "./Main.module.css"
import Navbar from "./Navbar"
import Profile from "./Profile";
import Dialogs from "./Dialogs";
import News from "./News";
import Music from "./Music"
import Settings from "./Settings"
import {BrowserRouter, Route} from "react-router-dom";

const Main = () => {
    return (
        <BrowserRouter>
            <div className={s.container}>
                <Navbar/>
                <div className={s.wrapperContent}>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/content' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default Main;