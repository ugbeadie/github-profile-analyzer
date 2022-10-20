import React, {useState} from 'react'
import Users from '../../Users';
import './Home.css'

const Home = () => {

  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])

  const handleInputChange = (e) => {
    setQuery(e.target.value) 
    if (e.key === 'Enter') handleSearch()
  }
  const fetchUserNames = async () => {
    const res = await fetch(`https://api.github.com/search/users?q=${query}`)
    const data = await res.json()
    return data.items
  }
  const handleSearch = async (e) => {
    e.preventDefault()
    let users = await fetchUserNames()
    if (query) setUsers(users)
  }  

  return (
    <>
    <div className='search'>
      <input 
        type="text" 
        placeholder="Enter Username"
        value={query}
        onChange={handleInputChange}
      />      
      <button className='btn' onClick={handleSearch}>Search</button>
    </div>
    <div className='results'>
    {users 
    ? users.map((user) => <Users user={user} key={user.id}/>) 
    : <p>not found</p>}
    </div>
    </>
  )
}

export default Home