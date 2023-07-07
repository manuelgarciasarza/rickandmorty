import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from "./nav.module.css"
import Logo from "../../img/ricklogo.png"
import { Link } from "react-router-dom";

export default function Nav(props){
    return (
        <div className={style.nav}>
            <div className={style.navMenu}>
                <Link to="/home" className={style.links} >Home</Link>
                <Link to="/about" className={style.links}>About</Link>
                <Link to="/favorites" className={style.links}>Favorites</Link>
                <button className={style.logout} onClick={props.logOut}>Log out</button>
            </div>
            <div className={style.contener}>
                <img className={style.logo} src={Logo} />
            </div>
            <div className={style.contener}>
                <SearchBar onSearch={props.onSearch} onRandom={props.onRandom}/>
            </div>
        </div>
    )
}


/*
      {location.pathname !== "/detail/:id" && (
        <div className={style.navMenu}>
          <Link to="/home" className={style.links}>
            Home
          </Link>
          <Link to="/about" className={style.links}>
            About
          </Link>
          <button className={style.logout} onClick={props.logOut}>
            Log out
          </button>
        </div>
      )}
      <div className={style.contener}>
        <img className={style.logo} src={Logo} alt="Logo" />
      </div>
      {location.pathname !== "/detail/:id" && (
        <div className={style.contener}>
          <SearchBar onSearch={props.onSearch} onRandom={props.onRandom} />
        </div>
      )}
    </div>
  );
} */