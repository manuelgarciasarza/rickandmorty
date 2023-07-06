import React from 'react';
import Card from '../card/Card';
import style from './cards.module.css';

export default function Cards(props) {
  const handleClick = (id) => {
    const updatedCharacters = props.characters.filter((character) => character.id !== id);
    props.setCharacters(updatedCharacters);
  };

  return (
    <div className={style.container}>
      {props.characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={() => handleClick(character.id)}
        />
      ))}
    </div>
  );
}


/* <div>
{props.characters.map(character => {
   return <Card 
   key={character.ID} 
   name={character.name} 
   status={character.status} 
   species={character.species} 
   gender={character.gener} 
   origin={character.origin} 
   image={character.image} />
})}
</div> */