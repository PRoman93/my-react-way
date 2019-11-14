import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Messages from "./Messages/Messages"
import DialogsItem from "./DialogsItem";
import MessageItem from "./MessageItem";





//
//
// let dialogs = [
//     {id: 1, name: 'Roman'},
//     {id: 2, name: 'Ruslan'},
//     {id: 3, name: 'Yeugene'},
//     {id: 4, name: 'Serij'},
//     {id: 5, name: 'Petr'},
// ]
// let message = [
//     {id: 1, message: 'Hi,how are you?', likesCount: 12},
//     {id: 2, message: 'Hi,whats up?', likesCount: 15},
//     {id: 3, message: 'Hello!?', likesCount: 18},
//     {id: 4, message: 'Duuuuuude!', likesCount: 17},
//     {id: 5, message: 'Yo!', likesCount: 19},
// ]

const Dialogs = (props) => {





    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messageElements = props.message.map(m => <MessageItem message={m.message}/>)


    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<Messages message={props.state.message}/>*/}
            </div>
            <div>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;