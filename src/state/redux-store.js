import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer"
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profileData : profileReducer,
    messageData : messageReducer,
    usersPage : usersReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store