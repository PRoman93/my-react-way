import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Messages from "./Messages/Messages"




const MessageItem = (props) => {
    let path = "/message/"+props.id
    return (
        <div>
            <div>
                <span >{props.message} </span>
            </div>
        </div>
    )
}




export default MessageItem;