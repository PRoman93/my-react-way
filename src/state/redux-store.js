import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer"
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profileData : profileReducer,
    messageData : messageReducer,
    usersPage : usersReducer
})
let store = createStore(reducers);


export default store