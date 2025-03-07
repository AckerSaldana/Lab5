import React from 'react'
import {Outlet, NavLink} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <hr/>
      <Outlet/>
    </div>
  )
}

export default Layout
