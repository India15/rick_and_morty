import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV} from "./action-types";

export const addFav = (character) => {
    return {
      type:  ADD_FAV,
      payload: character,
    };
  };
  

  export const removeFav = (id) => {
    return {
      type: REMOVE_FAV,
      payload: id,
    };
  };

export const filterFav = (gender) => { //esta estructura es para codigo sincronico, si hay q hacer algo asin como consumir api es otra 
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};



  
  