import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./message-reducer"

let reducers = combineReducers({
    profileData : profileReducer,
    messageData : dialogsReducer
})
let store = createStore(reducers);


export default store