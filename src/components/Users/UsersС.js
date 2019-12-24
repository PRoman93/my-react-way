import React from 'react'
import user from './user.png'
import s from './Users.module.css';
import * as axios from 'axios'

class UsersC extends React.Component{

    getUsers = () => {
        if (this.props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }
        render(){
            {console.log(this.props.users)}


           return <div>


               <button onClick={this.getUsers}>Click</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : user}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { this.props.unfollow (u.id) } }>Unfollow</button>
                            : <button onClick={ () => { this.props.follow (u.id) } }>Follow</button>}
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
            </div>
        }
}
export default UsersC