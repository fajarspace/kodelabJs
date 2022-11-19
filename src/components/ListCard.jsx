import React from 'react';
import { NavLink } from "react-router-dom";
import Quotes from "./Quotes";

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
              <p className="title is-5">Sesi praktikum</p>
            </NavLink>
          </div>
          <div className="box">
            <NavLink to={""}>
              <p className="title is-5">Tempelate laporan</p>
            </NavLink>
          </div>
        </div>
        
        <Quotes />

        </div>
      </div>
  )
}

export default ListCard;