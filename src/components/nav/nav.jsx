import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from "./nav.module.css"
import { Link } from "react-router-dom";

export default function Nav(props){
    return (
        <div className={style.nav}>
            <Link to="/home" className={style.links} >Home</Link>
            <Link to="/about" className={style.links}>About</Link>
            <SearchBar onSearch={props.onSearch} onRandom={props.onRandom}/>
            <button onClick={props.logOut}>Log out</button>
        </div>
    )
}