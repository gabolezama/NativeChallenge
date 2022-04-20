import { SELECT_LIST } from "../actions/conmodites.actions";
import { UPDATE_SEARCH } from "../actions/conmodites.actions";

const initialState = {
  list: [],
  years: []
};

const ConmoditiesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SELECT_LIST:
      return {
        ...state,
        list: action.list,
        years: action.years
      };
//UPDATE_SEARCH indica el inicio de la copnsulta a la API
    case UPDATE_SEARCH:
      return {
        ...state,
        years: ['find','find']
      };

    default:
      return state;
  }
};
export default ConmoditiesReducer
