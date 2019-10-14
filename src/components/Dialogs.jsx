import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {


    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogsItem}>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    )
};

const Messages = (props) => {


    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
            {/*<div className={s.message}>{props.message}</div>*/}
            {/*<div className={s.message}>{props.message}</div>*/}
            {/*<div className={s.message}>{props.message}</div>*/}
            {/*<div className={s.message}>{props.message}</div>*/}

        </div>


    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Ruslan'},
        {id: 3, name: 'Yeugene'},
        {id: 4, name: 'Serij'},
        {id: 5, name: 'Petr'},
    ];


    let postData =  [
        {id:1, message:'Hi,how are you?', likesCount:12},
        {id:2, message:'Hi,whats up?', likesCount:15},
        {id:3, message:'Hello!?', likesCount:18},
        {id:4, message:'Duuuuuude!', likesCount:17},
        {id:5, message:'Yo!', likesCount:19},
    ]

    return (
        <div className={s.container}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name}
                             id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name}
                             id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name}
                             id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name}
                             id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name}
                             id={dialogsData[4].id}/>
            </div>

            <div className={s.messages}>
                <Messages message='Hi'/>
                <Messages message='Whats up?'/>
                <Messages message='How are you doing?'/>
                <Messages message='Yo'/>
            </div>
        </div>
    )
};
export default Dialogs;