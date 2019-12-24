import React from 'react'
import user from './user.png'
import * as axios from 'axios'


let Users = (props) => {
    if( props.users.length === 0) {

        axios.get('').then(response => {
            props.setUsers()
        })
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ?u.photos.small : user}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { props.unfollow (u.id) } }>Unfollow</button>
                            : <button onClick={ () => { props.follow (u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users