import React, {Component} from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData} from "../../../state/auth-reducer";

class Navbar extends Component {

    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render() {
        return (
            <nav className={s.container}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </nav>
        )
    }
}

export default connect(null, {getAuthUserData})(Navbar);