import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''></img>
        <div className="userChatInfo">
          <span>Jess</span>
        </div>
      </div>
    </div>
  )
}

export default Search