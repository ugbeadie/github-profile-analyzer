import React from 'react'
import { GiCrossedChains } from 'react-icons/gi';
import { AiFillEye,AiFillStar,AiOutlineFork,AiOutlineInfo } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import './pages/Profile/Profile.css'

const Repos = ({repo}) => {

    const {name, html_url, description, watchers_count, stargazers_count, forks_count, open_issues_count} = repo

  return (
    <div className='repos'>
        <div className='name'>
            <GiCrossedChains/>
            <a href={html_url} target='_blank'>{name}</a>
        </div>
        <div className='desc'>
            {description ? <p>{description}</p> : <p>This project does not have a description</p>}
        </div>
        <div className='specs'>
            <div className='watchers'>
                <span><AiFillEye/></span>
                <p>{watchers_count}</p>
            </div>
            <div className='stars'>
                <span><AiFillStar/></span>
                <p>{stargazers_count}</p>
            </div>
            <div className='forks'>
                <span><AiOutlineFork/></span>
                <p>{forks_count}</p>
            </div>
            <div className='issues'>
                <span><BiInfoCircle/></span>
                <p>{open_issues_count}</p>
            </div>
        </div>
    </div>
  )
}

export default Repos