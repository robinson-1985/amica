import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo_principal'>
        <span className="logo">AMICA</span>
      </span>
      <div className="user">
        <img src='' alt=''/>
        <span className='displayname'>John</span>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar