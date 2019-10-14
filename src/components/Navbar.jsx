import React from "react";
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={s.container}>
            <a href="/content">Profile</a>
            <a href="/dialogs">Messages</a>
            <a>News</a>
            <a>Music</a>
            <a>Settings</a>
        </nav>
    )
};
export default Navbar;