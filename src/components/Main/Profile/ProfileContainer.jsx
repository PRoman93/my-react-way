import React from "react";
import s from "./Profile.module.css"
// import ProfileImageContainer from "./ProfileImage/ProfileImageContainer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../state/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {



    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <div className={s.container}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile,
    }
};
 export default compose(connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

