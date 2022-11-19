import React from 'react'
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='container' >
        <nav>
          <ul>
            <li className="title">Kodelab</li>
            <li>
            <NavLink to={"/dashboard"} >
              <IoPerson /> Login
            </NavLink>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header