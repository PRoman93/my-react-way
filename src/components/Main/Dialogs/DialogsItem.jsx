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


export default DialogsItem;