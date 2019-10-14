import React from "react";
import s from "./Main.module.css"
import Navbar from "./Navbar"
import Content from "./Content";
import Dialogs from "./Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const Main = () => {
    return (
        <BrowserRouter>
            <div className={s.container}>
                <Navbar/>
                {/*<Content/>*/}
                <div className={s.wrapperContent}>
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/content" component={Content}/>
                {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
    )
};
export default Main;