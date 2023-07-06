import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {

   const handleClick = () => {
     props.onClose();
   };
 
   return (
     <div className={style.card}>
       <button className={style.button} onClick={handleClick}>
         X
       </button>
       <div className={style.cardInfo}>
         <Link to={`/detail/${props.id}`} ><h2>{props.name}</h2></Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
       </div>
       <img className={style.image} src={props.image} alt="imagen" />
     </div>
   );
 }
