import React from "react";
import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {


    let path = "/messages/" + props.id;
    return (
        <div >
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.state.message}</NavLink>
            </div>

        </div>
    )
};

const Messages = (props) => {

 let messageElements = props.state.message.map(m => <MessageItem message={m.message}/>)


    return (

        <div className={s.messages}>
            {messageElements}
        </div>

    )
}

export default Messages;