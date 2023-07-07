import React,{ useState, useEffect} from "react";
import style from "./card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    if (isFav){
      setIsFav(false);
      props.removeFav(props.id)
    } else {
      setIsFav(true)
      props.addFav(props)
    }
  }    
  useEffect(() => {
      const isFavorite = props.myFavorites.some((fav) => fav.id === props.id);
      setIsFav(isFavorite);
  }, [props.myFavorites, props.id]);


  const handleClick = () => {
     props.onClose();
  };

  return (
     <div className={style.card}>
      <button className={style.favorite} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
       <button className={style.button} onClick={handleClick}>
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);