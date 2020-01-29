import React from "react";
import s from "./Profile.module.css"
// import ProfileImageContainer from "./ProfileImage/ProfileImageContainer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../state/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
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
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile,
    }
};
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)