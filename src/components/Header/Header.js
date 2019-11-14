import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.container}>
            <header className={s.header}>
                <img src="https://cdn.silodrome.com/wp-content/uploads/2013/11/Pininfarina-Logo.jpg" alt=""/>
            </header>
            {/*<nav>*/}
            {/*<div>Main content</div>*/}
            {/*<a href="">Home</a>*/}
            {/*<a href="">New Feed</a>*/}
            {/*<a href="">Messages</a>*/}
            {/*</nav>*/}
        </div>
    )
};
export default Header;