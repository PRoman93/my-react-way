import React from "react";
import s from "../Profile.module.css"
import {NavLink} from "react-router-dom";

const ProfileImage = (props) => {
    return (
        <div className={s.container}>
            <div className={s.mainImage}>
                <div>
                    {props.isAuth
                        ? props.login
                        : <NavLink className={s.loginBlock} to={'/login'}>Login</NavLink>}
                </div>
                <img src="http://hq-wallpapers.ru/wallpapers/8/hq-wallpapers_ru_city_37352_1920x1200.jpg" alt=""/>
            </div>
        </div>

    )
}
export default ProfileImage;