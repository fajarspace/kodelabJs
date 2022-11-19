import React from 'react'
import { Navlink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li>
            <Navlink to={"/dashboard"}>Dashboard</Navlink>
          </li>
          <li>
            <Navlink to={"/jadwals"}>jadwal</Navlink>
          </li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list">
          <li>
            <Navlink to={"/users"}>users</Navlink>
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

export default Sidebar
