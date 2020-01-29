import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator,} from "../../../state/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;