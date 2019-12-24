import React from 'react'
import Users from "./Users";
import UsersC from "./UsersС"
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../state/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

}

let mapDispatchToProps = (dispatch) => {
        return {
            follow : (userId) => {
                dispatch(followAC(userId))
            },
            unfollow : (userId) => {
                dispatch(unfollowAC(userId))
            },
            setUsers : (users) => {
                dispatch(setUsersAC(users))
            }
        }
}


export default connect (mapStateToProps, mapDispatchToProps)(UsersC)