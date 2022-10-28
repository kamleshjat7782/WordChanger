import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
       <nav className='navbar'>
        <div className="logo">
            <a href="/">Kamlesh choudhary</a>
        </div>
        <div className="manu">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "about">About</Link></li>
                <li><Link to = "contact">Contact</Link></li>
                <li><Link to = "alert">Alert</Link></li>
            </ul>
        </div>
       </nav>
       <Outlet/>
    </>
  )
}

export default Navbar;
