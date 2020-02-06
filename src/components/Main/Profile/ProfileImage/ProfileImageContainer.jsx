import React from "react";
import ProfileImage from "./ProfileImage";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../../../state/auth-reducer";

class ProfileImageContainer extends React.Component{

    // componentDidMount() {
    //     debugger
    //     // this.props.getAuthUserData()
    // }
    render(){
        return (
         <ProfileImage {...this.props}/>

        )

    }

}

export const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
})




export default connect(mapStateToProps, {getAuthUserData, logout}) (ProfileImageContainer);