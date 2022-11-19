import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='container' >
        <nav>
          <ul>
            <li className="title">Kodelab</li>
            <li>
            <NavLink to={"/dashboard"} >
              Login
            </NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header