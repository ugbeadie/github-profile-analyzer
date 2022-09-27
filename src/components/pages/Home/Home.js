import React, {useState,useEffect} from 'react'
import Users from '../../Users';
import './Home.css'
//TODO: DISPLAY NOT FOUND IF USER DOESNT EXIST
//TODO: WORK ON PAGINATION
const Home = () => {

  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  // useEffect(() => {
  //   const updateUsers = async () => {
  //   let users = await fetchUsers()
  //     if (query) setUsers(users)
  //   }
  //   updateUsers()
  // }, [page])

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  const fetchUserNames = async () => {
    const res = await fetch(`https://api.github.com/search/users?q=${query}&${page}`)
    const data = await res.json()
    return data.items
  }
  const handleSearch = async (e) => {
    e.preventDefault()
    let users = await fetchUserNames()
    if (query) setUsers(users)
  }

  const handlePrevPage = () => {
    if (page === 1) {
      return page
    } else {
      setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    setPage(page + 1)
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
    {/* {users?.length >= 30 
    ? <div className='pagination'>
      <span>{page}</span>
      <button onClick={handlePrevPage}>-</button>
      <button onClick={handleNextPage}>+</button>
    </div> 
    : null} */}
    {/* <Link to='/profile'>go</Link> */}
    </>
  )
}

export default Home