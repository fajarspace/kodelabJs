import React from 'react';
import { IoHeart } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <div className="container">
      
      <div className="columns is-mobile">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
            {/* <NavLink>
              <p><IoPerson />Kontak Aslab</p><br />
            </NavLink> */}
          <h2 className='subtitle' >Built with <IoHeart /> React.Js</h2>
        </div>
        <div className="column"></div>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer