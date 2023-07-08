import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./detail.module.css";
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return () => setCharacter({});
  }, [id]);

  return (
    <div className={style.conteiner}>
        <div className={style.card}>
            <div id={style.info}>
              <h2>{character.name}</h2>
              <h3>GENDER: {character.gender}</h3>
              <h3>ORIGIN:   {character.origin && character.origin.name}</h3>
              <h3>SPECIES:   {character.species}</h3>
              <h3>STATUS:   {character.status}</h3>
            </div>
            <Link to={"/home"}>
              <img className={style.image} src={character.image} alt={character.name} />
            </Link>
        </div>
        
    </div>
  );
}