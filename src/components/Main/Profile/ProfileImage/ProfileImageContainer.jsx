import React from "react";
import s from "../Profile.module.css"
import {NavLink} from "react-router-dom";
import ProfileImage from "./ProfileImage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../../state/auth-reducer";

class ProfileImageContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials:true})
            .then(response => {
                debugger
               if(response.data.resultCode === 0){
                   let {id, email,login} = response.data.data
                   this.props.setAuthUserData (id, email,login)
               }
            })
    }
    render(){
        return (
         <ProfileImage {...this.props}/>

        )

    }

}

export const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})




export default connect(mapStateToProps, {setAuthUserData}) (ProfileImageContainer);