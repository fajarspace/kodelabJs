import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu container">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/jadwals"}>jadwal</NavLink>
          </li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>users</NavLink>
          </li>
        </ul>
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li>
            <button className='button is-white' >Log Out</button>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar;
