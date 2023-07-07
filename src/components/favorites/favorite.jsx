import React from "react";
import Card from "../card/Card";
import { connect } from "react-redux";
import style from "./favorite.module.css"

const Favorites = (props) => {
  const { myFavorites } = props;

  return (
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
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
