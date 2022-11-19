import React from 'react';
import { NavLink } from "react-router-dom";

const ListCard = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-narrow">
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">Tata tertib praktikan</p>
            </NavLink>
          </div>
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">PPT technical meeting</p>
            </NavLink>
          </div>
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">Tata tertib praktikan</p>
            </NavLink>
          </div>
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">Rekaman technical meeting</p>
            </NavLink>
          </div>
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">Jadwal</p>
            </NavLink>
          </div>
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">Modul</p>
            </NavLink>
          </div>
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">Jadwal</p>
            </NavLink>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <p className="title is-5">Flexible column</p>
            <p className="subtitle">This column will take up the remaining space available.</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default ListCard;