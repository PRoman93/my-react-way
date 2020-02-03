import React, {Component} from "react";
import s from "../Profile.module.css"
import Preloader from "../../../../common/preloader/Preloader";


class ProfileStatus extends Component {

    state = {
        editMode:false,
        status:this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode:false
        })
    }
    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    render() {

        return (

            <div>{!this.state.editMode && <div><span onDoubleClick={this.activatedEditMode}>{this.state.status || 'No status'}</span></div>}
                {this.state.editMode && <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedEditMode} value={this.state.status}/></div>}
            </div>
        )
    }
}

export default ProfileStatus;