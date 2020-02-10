import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profileData : profileReducer,
    messageData : messageReducer,
    usersPage : usersReducer,
    auth: authReducer,
    form:formReducer,
    app:appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store