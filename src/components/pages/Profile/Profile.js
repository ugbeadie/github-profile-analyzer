import React,{useState,useEffect} from 'react'
import { Link,useParams } from "react-router-dom";
import { MdLocationOn } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { BsFillPeopleFill,BsTwitter } from 'react-icons/bs';
import './Profile.css'
import axios from 'axios';
import Repos from '../../Repos';

const User = () => {
  const { login } = useParams()
  
  const [userInfo, setUserInfo] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {   
    const fetchUserInfoAndRepo = async () => {
    const res = await Promise.all([
      axios.get(`https://api.github.com/users/${login}`),
      axios.get(`https://api.github.com/users/${login}/repos`)
    ])
    setUserInfo(res[0].data)
    setRepos(res[1].data)
  }
  fetchUserInfoAndRepo()
}, [])

  const {avatar_url, login:username, bio, html_url:github_link, 
  location, followers, following, twitter_username, blog, public_repos} = userInfo

  return (
    <div className='user'>
      <Link to='/'><button className='back_btn'>BACK</button></Link>
      <div className='container'>

        <div>
          <img src={avatar_url} alt='avatar'/>
        </div>

        <div className='details'>
          <h1 className='name'>{username}</h1>
          <p className='bio'>{bio ? <p>{bio}</p> : <span>User's bio is not available.</span>}</p>
          <a href={github_link} target='_blank' className='github_btn'>VISIT GITHUB PROFILE</a>
          
          <div className='info'>
            <div className='first'>
              <div>
                <h6>Location</h6>
                {location ? <p>{location}</p> : <span>N/A</span>}
              </div>
              <div className='icon'><MdLocationOn size={20} color='#252b33'/></div>
            </div>
            <div className='second'>
              <div>
                <h6>Followers</h6>
                <p>{followers}</p>
              </div>
              <div className='icon'><IoIosPeople size={20} color='#252b33'/></div>
            </div>
            <div className='third'>
              <div>
                <h6>Following</h6>
                <p>{following}</p>
              </div>
              <div className='icon'><BsFillPeopleFill size={20} color='#252b33'/></div>
            </div>
            <div className='fourth'>
              <div>
                <h6>Twitter</h6>
                {twitter_username ? <p>{twitter_username}</p> : <span>N/A</span>}
              </div>
              <div className='icon'><BsTwitter size={20} color='#252b33'/></div>
            </div>
          </div>
          <div className='website'>
            <p>website:</p>
            {blog ? <a className='website' href={blog} target='_blank'>{blog}</a> : <span>N/A</span>}
          </div>          

        </div>
      </div>
        <section className='repo_container'>
        <h3>{username}'s Repositories ({public_repos})</h3>
          {repos.map((repo) => <Repos repo={repo} key={repo.id}/>)}
        </section>
      
    </div>
  )
}

export default User