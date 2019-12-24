import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem";
import MessageItem from "./MessageItem";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../../state/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        messageData:state.messageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: ()=> {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (message)=> {
            dispatch(updateNewMessageTextActionCreator(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;