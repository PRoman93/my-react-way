import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem";
import MessageItem from "./MessageItem";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../../state/message-reducer";


const Dialogs = (props) => {

    let state = props.messageData;
    console.log(props)
    let onSendMessageClick = () => {
          props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let message = e.target.value
        props.updateNewMessageText(message)

    }
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = state.message.map(m => <MessageItem message={m.message}/>)
    let newMessageText = state.newMessageText


    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<Messages message={props.state.message}/>*/}
            </div>
            <div>
                <div>{messageElements}</div>
                <div><textarea value={newMessageText}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'>

                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;