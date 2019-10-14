import React from "react";
import s from "./Content.module.css"

const Content = () => {
    return (
        <div className={s.container}>
            <div className={s.mainImage}><img
                src="http://hq-wallpapers.ru/wallpapers/8/hq-wallpapers_ru_city_37352_1920x1200.jpg" alt=""/></div>
            <div className={s.info}>
                <div className={s.photo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Schneur_Zalman_of_Liadi.jpg" alt=""/>
                </div>
                <div className={s.about}>
                    <h3>Roman P.</h3>
                    <div>date of birth: 11 september</div>
                    <div>City: Dnipro</div>
                    <div>Education: ODUVS</div>
                    <div>Website:</div>
                </div>
            </div>
            <div className={s.posts}>
                <h3>My posts</h3>
                <form action="">
                    <textarea placeholder="your news"></textarea>
                    <button>Send</button>
                </form>

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