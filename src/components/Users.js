import React from 'react'
// import avatar from './assets/avatar.png'
import { Link } from "react-router-dom";

const Users = ({user}) => {
    const {avatar_url,login} = user
  return (
    <div className='users'>
        <img src={avatar_url} alt={login}/>
        <div>
          <h3>{login}</h3>
          <Link to={`/profile/${login}`}><p>view profile</p></Link>
        </div>
    </div>
  )
}

export default Users