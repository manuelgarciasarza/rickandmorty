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
         <h2 className={`${style.nombre} ${style.cardInfo}`}>{props.name}</h2>
{/*      <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2> */}
       </div>
       <Link to={`/detail/${props.id}`} >
         <img className={style.image} src={props.image} alt="imagen" />
       </Link>
     </div>
   );
 }
