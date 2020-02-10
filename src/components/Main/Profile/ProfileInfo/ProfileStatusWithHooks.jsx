import React, {useState} from "react";
import s from "../Profile.module.css"
import Preloader from "../../../../common/preloader/Preloader";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (

        <h4>
            {!editMode && <div><span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span></div>}
            {editMode && <div><input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/></div>}
        </h4>
    )
}


export default ProfileStatusWithHooks;