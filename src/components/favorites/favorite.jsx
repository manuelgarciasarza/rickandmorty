import React from "react";
import Card from "../card/Card";
import { filterCards, orderCards, reset } from "../../redux/actions";
import { connect, useDispatch} from "react-redux";
import style from "./favorite.module.css"
import { useState } from "react";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [booleano, setBooleano] = useState(false)

  function handleOreder(event){
    dispatch(orderCards(event.target.value))
    setBooleano(!booleano)
  }

  function handleFilter(event){
    if(event.target.value === "RESET"){
      dispatch(reset())
    } else{
      dispatch(filterCards(event.target.value))
    }
    
  } 

  return (
    <div >
      <div>
        <select onChange={handleOreder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="RESET">ALL</option>
          <option value="unknown">UNKNOWN</option>
          <option value="Genderless">GENDERLESS</option>
          <option value="Female">FEMALE</option>
          <option value="Male">MALE</option>
        </select>  
      </div>

      <div className={style.container}>
      {myFavorites.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
