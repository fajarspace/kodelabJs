import React from 'react';
import { NavLink } from "react-router-dom";
import Quotes from "./Quotes";
import { IoPeople ,IoPlay, IoList, IoDocument, IoBook, IoWatch, IoCopy } from "react-icons/io5";

const ListCard = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-narrow">
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5 box-sidebar"><IoPeople /> Tata tertib praktikan</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5"><IoDocument /> PPT technical meeting</p>
            </NavLink>
          </div>
          <div className="box has-background-danger">
            <NavLink to={""}>
              <p className="title is-5"><IoPlay /> Rekaman technical meeting</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5"><IoWatch />Jadwal praktikum</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5"><IoBook /> Modul</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5"><IoList /> Sesi praktikum</p>
            </NavLink>
          </div>
          <div className="box has-background-warning-dark">
            <NavLink to={""}>
              <p className="title is-5"><IoCopy /> Tempelate laporan</p>
            </NavLink>
          </div>
          <div className="box has-background-grey">
            <NavLink to={""}>
              <p className="title is-5"><IoPeople /> Kontak Aslab</p>
            </NavLink>
          </div>
        </div>
        
        <Quotes />

        </div>
      </div>
  )
}

export default ListCard;