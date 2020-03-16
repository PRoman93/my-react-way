import React from "react";
import {addPostActionCreator} from "../../../../state/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postData: state.profileData.postData, // стремный момент - берет несуществующий profileData.postData !!! УЗНАТЬ
        // newPostText: state.profileData.newPostText
        newPostText:state.profileData.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;