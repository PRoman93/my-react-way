import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import PostsContainer from "./Posts/PostsContainer";
import ProfileImageContainer from "./ProfileImage/ProfileImageContainer";


const Profile = (props) => {

    return (
        <div className={s.container}>
            <ProfileImageContainer />
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <PostsContainer store={props.store} profile={props.profile}/>
        </div>
    )
};
export default Profile;