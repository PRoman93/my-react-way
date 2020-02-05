import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem";
import MessageItem from "./MessageItem";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.messageData;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = state.message.map(m => <MessageItem message={m.message}/>)
    let newMessageText = state.newMessageText

    let onNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<Messages message={props.state.message}/>*/}
            </div>
            <div>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={onNewMessage}/>
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form : 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;