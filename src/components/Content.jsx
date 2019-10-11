import React from "react";
import s from "./Content.module.css"

const Content = () => {
    return (
        <div className={s.container}>
            <div className={s.mainImage}><img
                src="http://hq-wallpapers.ru/wallpapers/8/hq-wallpapers_ru_city_37352_1920x1200.jpg" alt=""/></div>
            <div className={s.about}>
                <img src="images.jpg" width="80px" height="80px" alt=""/>
            </div>
            <div className={s.posts}>
                <div>de</div>
                <div>new post</div>
                <div>new post 2</div>
                <div>my post 1</div>
                <div>my post 2</div>
                <div>my post 3</div>
            </div>
        </div>
    )
};
export default Content;