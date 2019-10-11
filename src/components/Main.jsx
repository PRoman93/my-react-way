import React from "react";
import s from "./Main.module.css"
import Navbar from "./Navbar"
import Content from "./Content";

const Main = () => {
    return (
        <div className={s.container}>
            <Navbar/>
            <Content/>
        </div>
    )
};
export default Main;