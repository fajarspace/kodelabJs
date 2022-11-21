import React from 'react';
import { NavLink } from "react-router-dom";
import Quotes from "./Quotes";
import { IoPeople ,IoPlay, IoList, IoDocument, IoBook, IoWatch, IoCopy, IoCheckmarkCircle } from "react-icons/io5";

const ListCard = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-narrow">
        <p className='subtitle'>Praktikum : Bahasa Pemrograman</p>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoPeople /> Tata tertib praktikan</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoDocument /> PPT technical meeting</p>
            </NavLink>
          </div>
          <div className="box has-background-danger">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoPlay /> Rekaman technical meeting</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoWatch />Jadwal praktikum</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoBook /> Modul</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoList /> Sesi praktikum</p>
            </NavLink>
          </div>
          <div className="box has-background-link">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoCheckmarkCircle /> Absensi praktikum</p>
            </NavLink>
          </div>
          <div className="box has-background-warning-dark">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoCopy /> Tempelate laporan</p>
            </NavLink>
          </div>
          <div className="box has-background-grey">
            <NavLink to={""}>
              <p className="title is-5 has-text-light"><IoPeople /> Kontak Aslab</p>
            </NavLink>
          </div>
        </div>
        
        <Quotes />

        </div>
      </div>
  )
}

export default ListCard;