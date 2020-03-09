import React, {Component} from "react";
import s from "./Main.module.css"
import Navbar from "./Navbar/Navbar"
import News from "./News/News";
import Music from "./Music/Music"
import Settings from "./Settings/Settings"
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "../../state/app-reducer";
import {withSuspense} from "../../hoc/withSuspense";
import store from "../../state/redux-store";
import Preloader from "../../common/preloader/Preloader";

class Main extends Component {




    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
        const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

                <div className={s.container}>
                    <Navbar/>
                    <div className={s.wrapperContent}>
                        <Route exact path='/'  render={()=> <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs'  render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'  render={withSuspense(ProfileContainer)}/>
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
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(Main);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;