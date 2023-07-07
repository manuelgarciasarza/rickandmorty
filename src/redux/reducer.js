import { all } from "axios";
import {ORDER, FILTER, ADD_FAV, REMOVE_FAV, RESET } from "./actions";

const initialState = {
    myFavorites: [],
    allCharcters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            const addPj = [...state.allCharcters, action.payload]
            return {
                ...state,
                myFavorites: addPj,
                allCharcters: [...addPj]             
            };
            
        case REMOVE_FAV:
            
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    character => character.id !== action.payload
                ),
                allCharcters: state.allCharcters.filter(
                    character => character.id !== action.payload
                ),
            }
            
        case FILTER:
            return{
                ...state,
                myFavorites: state.allCharcters.filter((pj) => pj.gender === action.payload),
            } 

        case ORDER:
            let copyOrder = [...state.myFavorites].sort((a,b) => {

                if(action.payload === "A"){
                    if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
  
                    return 0
                }else {
                    if(a.id > b.id) return -1
                    if(b.id > a.id) return 1
                    return 0
                }
            })

            return{
                ...state,
                myFavorites: copyOrder
            }
        
        case RESET:
            return {...state, myFavorites: state.allCharcters}

        default:
            return {...state}
    } 
}

export default reducer;