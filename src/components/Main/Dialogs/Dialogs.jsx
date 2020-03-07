import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem";
import MessageItem from "./MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)
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
                <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form : 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;