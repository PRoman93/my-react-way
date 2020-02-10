import React, {Component} from "react";
import s from "./Main.module.css"
import Navbar from "./Navbar/Navbar"
import News from "./News/News";
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "../../state/app-reducer";
import Preloader from "../../common/preloader/Preloader";


class Main extends Component {


    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

                <div className={s.container}>
                    <Navbar/>
                    <div className={s.wrapperContent}>
                        <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default
compose(withRouter, connect(mapStateToProps, {initializeApp}))(Main)

//connect(mapStateToProps, {initializeApp})(Main);
