import React from "react";
import s from "../Profile.module.css"


const Post = (props) => {

    return (
        <div className={s.container}>
            <div className={s.posts}>
                <div>{props.message}</div><div>{props.likes}</div>
            </div>
        </div>
    )
};
export default Post;