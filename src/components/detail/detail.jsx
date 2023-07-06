import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./detail.module.css";
import { useParams } from 'react-router-dom';

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
              <h3>Status | {character.status}</h3>
              <h3>Species | {character.species}</h3>
              <h3>Gender | {character.gender}</h3>
              <h3>Origin | {character.origin && character.origin.name}</h3>
            </div>
            <img className={style.image} src={character.image} alt={character.name} />
        </div>
        
    </div>
  );
}