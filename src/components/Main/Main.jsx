import React from "react";
import s from "./Main.module.css"
import Navbar from "./Navbar/Navbar"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Users from "../Users/Users";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Main = (props) => {
    return (
        <BrowserRouter>
            <div className={s.container}>
                <Navbar/>
                <div className={s.wrapperContent}>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default Main;