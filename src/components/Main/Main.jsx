import React from "react";
import s from "./Main.module.css"
import Navbar from "./Navbar/Navbar"
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import {BrowserRouter, Route} from "react-router-dom";

const Main = (props) => {
    return (
        <BrowserRouter>
            <div className={s.container}>
                <Navbar/>
                <div className={s.wrapperContent}>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store} />}/>
                    <Route path='/content' render={() => <Profile profileData={props.state.profileData}
                                                                  dispatch={props.dispatch}
                                                                  newPostText={props.state.profileData.newPostText}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default Main;