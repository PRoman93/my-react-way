import React from "react";
import s from "../Profile.module.css"

const ProfileImage = () => {
    return (
        <div className={s.container}>
            <div className={s.mainImage}>
                <img src="http://hq-wallpapers.ru/wallpapers/8/hq-wallpapers_ru_city_37352_1920x1200.jpg" alt=""/>
            </div>
        </div>

    )
}
export default ProfileImage;