import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../state/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../state/message-reducer";




const mapStateToProps = (state) => {
    return {
        postData: state.profileData.postData,// стремный момент - берет несуществующий profileData.postData !!! УЗНАТЬ
        newPostText:state.profileData.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: ()=> {
            dispatch(addPostActionCreator())
        },
        updateNewMessageText: (message)=> {
            dispatch(updateNewPostActionCreator(message))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;