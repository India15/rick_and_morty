import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allFavorite: [],
    detail: {},
  };

const rootReducer =(state = initialState, action) =>{
    switch (action.type) {
        case ADD_FAV:
            return {
                    ...state,
                    myFavorites: [...state.myFavorites, action.payload],
                    allFavorite: [...state.allFavorite, action.payload],

            }
        case REMOVE_FAV:
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter ( char=> char.id !== action.payload)
                }
                
 
        case FILTER_FAV:
                let favoriteFiltered;
                if (action.payload === "All") {
                  favoriteFiltered = state.allFavorite;
                } else {
                  favoriteFiltered = state.allFavorite.filter(char => char.gender === action.payload);
                }
                return {
                  ...state,
                  myFavorites: favoriteFiltered
                }


        case ORDER_FAV:
                  let favoritesOrdered = state.myFavorites.sort((a, b) => {
                return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
            })
            return {
                ...state,
                myFavorites: favoritesOrdered
            }
        
              
        default:
            return state
    }
}

export default rootReducer;