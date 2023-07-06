import React from "react";
import style from "./searchbar.module.css"
import { useState } from "react";


export default function SearchBar(props) {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleRandom = () => {
      props.onRandom();
    };
  

   return (
      <div className={style.conteiner}>
         <input 
            className={style.bar} 
            type='search' 
            placeholder="Buscar..."
            value={id}
            onChange={handleChange}
         />
         <button className={style.add} onClick={() => props.onSearch(id)}>Agregar</button>
         <button className={style.random} onClick={handleRandom}>
         Random
         </button>
      </div>
   );
}
