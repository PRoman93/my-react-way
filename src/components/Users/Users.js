import React from 'react'
import s from "./Users.module.css";
import user from "./user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../state/users-reducer";
import {usersAPI} from "../../api/Api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.users}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}><img className={s.userPhoto}
                                                                          src={u.photos.small != null ? u.photos.small : user}/></NavLink>
                                </div>
                                <div>
                                    {u.followed

                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      // debugger
                                                      // props.toggleFollowingProgress(true, u.id)
                                                      // usersAPI.unfollow(u.id)
                                                      //     .then(response => {
                                                      //         if (response.data.resultCode == 0) {
                                                      //             props.unfollow(u.id)
                                                      //         }
                                                      //         props.toggleFollowingProgress(false, u.id)
                                                      //
                                                      //     })
                                                      props.unfollow(u.id)
                                                  }}>Unfollow</button>

                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                    props.follow(u.id)
                                                  }}>Follow</button>}

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.city'}</div>
                                    <div>{'u.location.country'}</div>
                                </span>
                            </span>
                        </div>)
                }
            )
        }
    </div>
}
export default Users